Ignis Chat App
Ignis Chat App is a modern, lightweight, and real-time chat application built using React, Zustand, and Firebase. It features user authentication, one-on-one messaging, image uploads, and state management powered by Zustand.

Features
🔒 User Authentication: Secure user login and registration with Firebase Authentication.
💬 Real-Time Messaging: Chat in real-time with friends using Firebase Firestore.
📷 Image Uploads: Send images directly in chat.
⚡ State Management: Efficient state management with Zustand.
🖼️ Responsive UI: Fully responsive design for a seamless experience across devices.
Tech Stack
React: Frontend library for building the user interface.
Zustand: Lightweight state management for managing global states.
Firebase:
Firebase Authentication: For secure user sign-in and sign-up.
Firestore Database: For real-time data storage and retrieval.
Firebase Storage: For image uploads.
Setup and Installation
Prerequisites
Ensure you have the following installed:

Node.js (v16 or higher)
npm or yarn
A Firebase Project with Authentication and Firestore enabled.
Installation Steps
Clone the Repository:

git clone https://github.com/<your-username>/ignis-chat-app.git
cd ignis-chat-app
Install Dependencies:

npm install
OR

yarn install
Set Up Firebase:

Create a Firebase project at Firebase Console.
Enable Firebase Authentication (Email/Password) and Cloud Firestore.
Enable Firebase Storage for image uploads.
Copy your Firebase configuration (API key, project ID, etc.).
Create a .env file in the project root and add your Firebase configuration:
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
Start the Development Server:

npm start
OR

yarn start
Build and Deployment
Build for Production:
To create a production-ready build, run:

npm run build
The optimized build files will be in the build folder.

Deploy to Netlify:
Drag and drop the build folder onto the Netlify Dashboard.
Your app will be deployed, and you’ll receive a live URL.
