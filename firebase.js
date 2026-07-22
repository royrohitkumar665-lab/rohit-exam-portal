// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrN0K73PSfe9oUbj0IddWzz79KLjeZqD8",
  authDomain: "rohit-exam-portal.firebaseapp.com",
  projectId: "rohit-exam-portal",
  storageBucket: "rohit-exam-portal.firebasestorage.app",
  messagingSenderId: "705762397933",
  appId: "1:705762397933:web:9ebe9a65160dd8d1e806e4",
  measurementId: "G-M8DY8XPSFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database
const db = getFirestore(app);

export { db };