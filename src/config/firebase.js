import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQHurE58k0uCDEQ4lje7G74mPg57D-RCg",
  authDomain: "tillage-9cc70.firebaseapp.com",
  projectId: "tillage-9cc70",
  storageBucket: "tillage-9cc70.appspot.com",
  messagingSenderId: "1032131089292",
  appId: "1:1032131089292:web:b9753cb43d0933757d3ca9",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth();

export {
  app,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
};
