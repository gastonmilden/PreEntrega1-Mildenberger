import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkiHmK3QxH65gjGyO_G6WA4FcoULxxp1c",
  authDomain: "padel-shop-dcb64.firebaseapp.com",
  projectId: "padel-shop-dcb64",
  storageBucket: "padel-shop-dcb64.appspot.com",
  messagingSenderId: "892359082169",
  appId: "1:892359082169:web:132b0fb7860bf3b93d1b68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
);
