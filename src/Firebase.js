// Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDEEiEmgci2oR5kTiiAsPfdFr3V-tqQEco",
    authDomain: "hapomessenger.firebaseapp.com",
    projectId: "hapomessenger",
    storageBucket: "hapomessenger.appspot.com",
    messagingSenderId: "851300319174",
    appId: "1:851300319174:web:a4cbfdf087caad47e17cc7",
    measurementId: "G-T3CNXYFH0V"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  
  export { app, auth };