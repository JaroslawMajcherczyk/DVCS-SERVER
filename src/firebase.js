// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByd9TQ9IMR6z6Qx2ippm_doqDfCQoGI40",
  authDomain: "dvcs-43628.firebaseapp.com",
  databaseURL: "https://dvcs-43628-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dvcs-43628",
  storageBucket: "dvcs-43628.appspot.com",
  messagingSenderId: "1050171742403",
  appId: "1:1050171742403:web:9eca0cd7212f5fb3f02a76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, firestore };