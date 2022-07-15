// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-2nZN_Mbnt7Cqkzb3_RSrd3FZrjThAJQ",
  authDomain: "fb-messenger-app-833df.firebaseapp.com",
  projectId: "fb-messenger-app-833df",
  storageBucket: "fb-messenger-app-833df.appspot.com",
  messagingSenderId: "830931804756",
  appId: "1:830931804756:web:1c2c0c25c2b7dfd5e2c3c1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { auth, db };