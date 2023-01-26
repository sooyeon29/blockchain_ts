// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk2m7i_4fQsn96aDv9rw38g1hMzCygm9s",
  authDomain: "react-firebase-login-4b849.firebaseapp.com",
  projectId: "react-firebase-login-4b849",
  storageBucket: "react-firebase-login-4b849.appspot.com",
  messagingSenderId: "98972857188",
  appId: "1:98972857188:web:62d0a4888596b0dfe24071",
  measurementId: "G-6W8YXM8KG0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
