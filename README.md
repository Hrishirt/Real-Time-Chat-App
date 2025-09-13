# NexusChat

A real-time messaging application that lets you chat with friends, create groups, and share images — all with end-to-end encryption for privacy and security.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-blue)](https://real-time-chat-app-maew.onrender.com/login)

---

## Features

- Real-time chat with instant message delivery
- User search and group chat creation
- Image sharing with Cloudinary integration
- User presence tracking (online/offline)
- End-to-end AES encryption on all messages

---

## Tech Stack

**Frontend**
- React 19 with Vite
- Tailwind CSS and DaisyUI
- Zustand for state management
- Socket.io client
- Crypto-JS (AES encryption)

**Backend**
- Node.js and Express
- MongoDB with Mongoose
- Socket.io for real-time engine
- JWT-based authentication
- bcrypt for password hashing
- Cloudinary for image uploads

**Deployment**
- Frontend: Vercel / Netlify
- Backend: Render

---

## Security

- End-to-end encryption using AES (via Crypto-JS)
- JWT tokens stored securely in HTTP-only cookies
- Passwords hashed with bcrypt
- CORS configuration, input validation, and custom error handling

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Hrishirt/Real-Time-Chat-App.git
cd Real-Time-Chat-App

# Install backend dependencies
cd backend
npm install

# Create a `.env` file with:
# MONGO_URI=
# JWT_SECRET=
# CLOUDINARY_CLOUD_NAME=
# CLOUDINARY_API_KEY=
# CLOUDINARY_API_SECRET=

# Start backend
npm run dev

# In a new terminal window, start frontend
cd ../frontend
npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## What I Learned

This project helped me understand how to build a complete real-time web application from scratch. I learned how to:

- Build secure authentication flows using JWT and bcrypt
- Implement real-time functionality using Socket.io
- Manage application state efficiently with Zustand
- Encrypt messages client-side and store them securely
- Structure a full-stack app with modular design and proper error handling
- Integrate image uploads and CDN delivery with Cloudinary

---

## Repository

GitHub: [https://github.com/Hrishirt/Real-Time-Chat-App](https://github.com/Hrishirt/Real-Time-Chat-App)
