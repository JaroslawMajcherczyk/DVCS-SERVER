// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import Firebase Storage
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Export Firebase Storage

export { auth, db, storage };