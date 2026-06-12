
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBYCmQOSLUkdsJP4if8uGkigsC_NhGa3Yo",
    authDomain: "e-commerce-zain.firebaseapp.com",
    projectId: "e-commerce-zain",
    storageBucket: "e-commerce-zain.firebasestorage.app",
    messagingSenderId: "284903856179",
    appId: "1:284903856179:web:82b1040a8c3620ab846b46",
    measurementId: "G-0NQWM242WL"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword }
 