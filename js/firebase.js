// Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyAQRxXpTLMp_xZNcs_kxRd98s3itGl3RQk",
    authDomain: "login-project-d0062.firebaseapp.com",
    projectId: "login-project-d0062",
    storageBucket: "login-project-d0062.firebasestorage.app",
    messagingSenderId: "953305927352",
    appId: "1:953305927352:web:64b0e0460edda4acd0ee4d"
};

// Initialize
const app = initializeApp(firebaseConfig);

// Export
export const auth = getAuth(app);
export const db = getFirestore(app);