// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdntgvztkU4drpbcHiQA7MgcxfsrxC4wk",
  authDomain: "samanewsnlp-b815f.firebaseapp.com",
  projectId: "samanewsnlp-b815f",
  storageBucket: "samanewsnlp-b815f.firebasestorage.app",
  messagingSenderId: "505507094522",
  appId: "1:505507094522:web:f0510ac750de7e0040ce43",
  measurementId: "G-KM521D0ZDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;