// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW5KjoG60h5mXlmCvRdZiKew5F7EJvX88",
  authDomain: "asif-real-estate.firebaseapp.com",
  projectId: "asif-real-estate",
  storageBucket: "asif-real-estate.firebasestorage.app",
  messagingSenderId: "370219324674",
  appId: "1:370219324674:web:890f0488363cd1af6d5e1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app