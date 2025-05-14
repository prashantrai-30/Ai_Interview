// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAP-VfppVSHKH54wPLdWiZHWWMKYCoPklQ",
  authDomain: "ai-interview-d7690.firebaseapp.com",
  projectId: "ai-interview-d7690",
  storageBucket: "ai-interview-d7690.firebasestorage.app",
  messagingSenderId: "977282294556",
  appId: "1:977282294556:web:bc2e770be86db8781510d9",
  measurementId: "G-PL99MWK291"
};

// Initialize Firebase
const app = !getApps.length ?initializeApp(firebaseConfig) : getApp() ;
export const auth = getAuth(app);
export const db = getFirestore(app);