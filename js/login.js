// Firebase Import
import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


// Login Button
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.addEventListener("click", async () => {

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        // Validation
        if (!email || !password) {
            alert("Email এবং Password দিন");
            return;
        }

        try {

            // Login User
            await signInWithEmailAndPassword(auth, email, password);

            alert("Login Successful ✅");

            // Dashboard এ পাঠাবে
            window.location.href = "dashboard.html";

        } catch (error) {

            switch (error.code) {

                case "auth/invalid-credential":
                    alert("ভুল Email অথবা Password");
                    break;

                case "auth/user-not-found":
                    alert("এই Email দিয়ে কোনো Account নেই");
                    break;

                case "auth/wrong-password":
                    alert("Password ভুল");
                    break;

                case "auth/invalid-email":
                    alert("সঠিক Email দিন");
                    break;

                default:
                    alert(error.message);
            }

        }

    });

}