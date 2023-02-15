// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `AIzaSyD2JuNk5QqD6vvFXSUvijtBhYq2EyhXjIA`,
  authDomain: "we-chat-d9be8.firebaseapp.com",
  projectId: "we-chat-d9be8",
  storageBucket: "we-chat-d9be8.appspot.com",
  messagingSenderId: "806505553584",
  appId: "1:806505553584:web:a32ddb4f0423da7ec96575",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
