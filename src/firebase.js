// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBra6vEik7rk7nRPbcIJ89ywqtCuFDlPSw",
  authDomain: "clone-2696d.firebaseapp.com",
  projectId: "clone-2696d",
  storageBucket: "clone-2696d.appspot.com",
  messagingSenderId: "897767010888",
  appId: "1:897767010888:web:742ac2558592036a535e7d",
  measurementId: "G-EGXFTZDN90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);