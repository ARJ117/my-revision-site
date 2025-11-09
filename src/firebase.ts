// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUDkOiXFYuliCTrrBR-op5aKNU8QOdjMM",
  authDomain: "my-revision-site.firebaseapp.com",
  projectId: "my-revision-site",
  storageBucket: "my-revision-site.appspot.com",
  messagingSenderId: "1074770514413",
  appId: "1:1074770514413:web:8a097665030e76228057e4",
  measurementId: "G-7F1G8748XR"
};

const app = initializeApp(firebaseConfig);

// ✅ Make sure you export these
export const auth = getAuth(app);
export const db = getFirestore(app);

console.log("firebase.ts exports:", { auth, db });
