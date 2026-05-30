import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDIrQeW3__KYww6A6mZALwALvWwHA8rlWM",
  authDomain: "jsaija-2db79.firebaseapp.com",
  projectId: "jsaija-2db79",
  storageBucket: "jsaija-2db79.firebasestorage.app",
  messagingSenderId: "20611243185",
  appId: "1:20611243185:web:90dd4c4ad6ba9fea295690",
  databaseURL: "https://jsaija-2db79-default-rtdb.firebaseio.com"
};

// Prevent duplicate initialization on hot reload
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const rtdb = getDatabase(app);

export { app, db, rtdb };
