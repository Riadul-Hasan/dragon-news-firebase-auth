// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTlHQZEE0ywsNlOCcCpA8vuuaYnZCPUJY",
  authDomain: "dragon-news-auth-ae86c.firebaseapp.com",
  projectId: "dragon-news-auth-ae86c",
  storageBucket: "dragon-news-auth-ae86c.firebasestorage.app",
  messagingSenderId: "690353153081",
  appId: "1:690353153081:web:a69e49c5dbbc66689f59e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;