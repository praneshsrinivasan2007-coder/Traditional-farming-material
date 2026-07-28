// Firebase initialization
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZAYy7rCFXAiQSs6YvbhWXRCm-8N-8Q7Q",
  authDomain: "pranesh-2b3b6.firebaseapp.com",
  projectId: "pranesh-2b3b6",
  storageBucket: "pranesh-2b3b6.firebasestorage.app",
  messagingSenderId: "935424148444",
  appId: "1:935424148444:web:74de764255020a48d18519",
  measurementId: "G-F86JV5CGH9",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
