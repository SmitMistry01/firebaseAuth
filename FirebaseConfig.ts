// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsuyFDFVJrew_8ka84wJ0ReZk86dKV00U",
  authDomain: "webauthapp-f81c1.firebaseapp.com",
  projectId: "webauthapp-f81c1",
  storageBucket: "webauthapp-f81c1.appspot.com",
  messagingSenderId: "117229372391",
  appId: "1:117229372391:web:cc146dc9cf4b0d4a283342"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
