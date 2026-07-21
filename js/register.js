// Firebase Import
import { auth, db } from "./firebase.js";

import {
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


// Register Button
const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {

    registerBtn.addEventListener("click", async () => {

        const name = document.getElementById("registerName").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const phone = document.getElementById("registerPhone").value.trim();
        const password = document.getElementById("registerPassword").value;

        // Validation
        if (!name || !email || !phone || !password) {
            alert("সব তথ্য পূরণ করুন");
            return;
        }

        try {

            // Create User
            const userCredential =
                await createUserWithEmailAndPassword(auth, email, password);

            const user = userCredential.user;

            // Save Firestore
            await setDoc(doc(db, "students", user.uid), {

                name: name,
                email: email,
                phone: phone

            });

            alert("Registration Successful ✅");

            // Redirect
            window.location.href = "login.html";

        }

        catch (error) {

            alert(error.message);

        }

    });

}