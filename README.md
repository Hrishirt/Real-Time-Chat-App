NexusChat
A real-time messaging application that lets you chat with friends, create groups, and share images - all with end-to-end encryption for privacy.
![Live Demo]([https://img.shields.io/badge/Live%20Demo-View%20App-blue](https://real-time-chat-app-maew.onrender.com/))
What it does
NexusChat is a WhatsApp-style messaging app where you can:
Send messages instantly to friends
Search for new people to chat with
Create group conversations
Share images and photos
See who's online in real-time
Keep your messages private with encryption
How it works
Frontend: Built with React and styled with Tailwind CSS. The app automatically encrypts your messages before sending them, so only you and the person you're chatting with can read them.
Backend: Runs on Node.js with Express, uses MongoDB to store messages and user data, and Socket.io to make everything happen in real-time.
Security: Messages are encrypted on your device before they're sent, so even if someone could access the database, they couldn't read your conversations.
Getting started
Clone the repository
Install dependencies: npm install (both frontend and backend folders)
Set up your environment variables (MongoDB connection, JWT secret, etc.)
Run the backend: npm run dev in the backend folder
Run the frontend: npm run dev in the frontend folder
Open your browser and start chatting
What I learned building this
This project taught me how to build a complete application from scratch. I learned how to handle real-time data with WebSockets, implement proper authentication, and manage state across a React application. The encryption part was interesting - I had to figure out how to encrypt messages on the client side without breaking the user experience.
Working with Socket.io was challenging at first, especially getting the online/offline status to work correctly. I also learned a lot about database design and how to structure chat data efficiently.
The most rewarding part was seeing everything come together - when you send a message and it appears instantly on the other person's screen, it feels like magic even though you know exactly how it works.
Tech stack
Frontend: React, Tailwind CSS, Zustand, Socket.io Client
Backend: Node.js, Express, Socket.io, MongoDB, Mongoose
Security: JWT authentication, bcrypt password hashing, AES encryption
Deployment: Render (backend), Vercel/Netlify (frontend)
Built as a learning project to understand real-time web applications and modern web development practices.
