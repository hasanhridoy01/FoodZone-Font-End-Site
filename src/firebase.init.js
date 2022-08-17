// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc3t_XxKmRk4QSAkn7KL-39aYAG4l7HUs",
  authDomain: "e-commerce-site-999ae.firebaseapp.com",
  projectId: "e-commerce-site-999ae",
  storageBucket: "e-commerce-site-999ae.appspot.com",
  messagingSenderId: "216826118942",
  appId: "1:216826118942:web:b4556f5140934433bc3f0f",
  measurementId: "G-TWZ4NMKD2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;