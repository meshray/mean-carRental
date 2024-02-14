// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-carrental-94c44.firebaseapp.com",
  projectId: "mern-carrental-94c44",
  storageBucket: "mern-carrental-94c44.appspot.com",
  messagingSenderId: "737055848399",
  appId: "1:737055848399:web:ee07c4f73db9ae7e23c4ba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);