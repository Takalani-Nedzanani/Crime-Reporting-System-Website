// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBmpN-OgB-JCjCN5uAJY7ks5R10Is9AsW4",
    authDomain: "crime-reporting-system-website.firebaseapp.com",
    projectId: "crime-reporting-system-website",
    storageBucket: "crime-reporting-system-website.firebasestorage.app",
    messagingSenderId: "724486591445",
    appId: "1:724486591445:web:ea640065d85f7bc34d635c",
    measurementId: "G-RN8DXECS8Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

