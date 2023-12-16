// Firebase.js
import { initializeApp, getApps, deleteApp } from "firebase/app";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Correction ici

const existingApps = getApps();
existingApps.map(app => {
  deleteApp(app);
});

const firebaseConfig = {
  apiKey: "AIzaSyDEEiEmgci2oR5kTiiAsPfdFr3V-tqQEco",
  authDomain: "hapomessenger.firebaseapp.com",
  projectId: "hapomessenger",
  storageBucket: "hapomessenger.appspot.com",
  messagingSenderId: "851300319174",
  appId: "1:851300319174:web:a4cbfdf087caad47e17cc7",
  measurementId: "G-T3CNXYFH0V",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

export {
  app,
  auth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  database,
  collection,
  addDoc, // Correction ici
};
