import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASEAPIKEY,
    authDomain: import.meta.env.VITE_FIREBASEAUTHDOMAIN,
    projectId: import.meta.env.VITE_FIREBASEPROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASESTORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASEMESSAGINGSENDERID,
    appId: import.meta.env.VITE_FIREBASEAPPID,
    measurementId: import.meta.env.VITE_FIREBASEMEASUREMENTID
  };


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const storage = getStorage(app);

export { storage, app ,auth };
