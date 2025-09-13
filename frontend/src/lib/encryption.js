import CryptoJS from 'crypto-js';

// Simple encryption key - in production, this should be derived from user password or stored securely
const ENCRYPTION_KEY = 'nexus-chat-secure-key-2024';

export const encryptMessage = (message) => {
  try {
    const encrypted = CryptoJS.AES.encrypt(message, ENCRYPTION_KEY).toString();
    return encrypted;
  } catch (error) {
    console.error('Encryption error:', error);
    return message; // Return original message if encryption fails
  }
};

export const decryptMessage = (encryptedMessage) => {
  try {
    const decrypted = CryptoJS.AES.decrypt(encryptedMessage, ENCRYPTION_KEY);
    return decrypted.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error('Decryption error:', error);
    return encryptedMessage; // Return encrypted message if decryption fails
  }
};

export const isEncrypted = (message) => {
  // Simple check to see if message looks encrypted (base64 format)
  try {
    return /^[A-Za-z0-9+/]+=*$/.test(message) && message.length > 20;
  } catch {
    return false;
  }
};
