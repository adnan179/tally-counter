// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDZYhfkuchDjbTsqSr8d4zB4RBnQ_eGCM",
  authDomain: "tally-counter-69a22.firebaseapp.com",
  projectId: "tally-counter-69a22",
  storageBucket: "tally-counter-69a22.appspot.com",
  messagingSenderId: "416540352552",
  appId: "1:416540352552:web:7043650ac34c2df236951d",
  measurementId: "G-G140B6Z2ZS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const signIn = signInWithEmailAndPassword;
