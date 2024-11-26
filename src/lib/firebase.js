import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "ignis-chat-app.firebaseapp.com",
  projectId: "ignis-chat-app",
  storageBucket: "ignis-chat-app.firebasestorage.app",
  messagingSenderId: "886429242237",
  appId: "1:886429242237:web:cab0bacd345f99c8a03214",
  measurementId: "G-7GDB44KQDW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()