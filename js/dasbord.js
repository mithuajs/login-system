// Firebase Import
import { auth, db } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


// Dashboard Load
onAuthStateChanged(auth, async (user) => {

    // User Login না থাকলে Login Page এ পাঠাবে
    if (!user) {
        window.location.href = "login.html";
        return;
    }

    try {

        // Firestore থেকে Student Data আনবে
        const docRef = doc(db, "students", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

            const student = docSnap.data();

            document.getElementById("studentName").innerText = student.name;
            document.getElementById("studentEmail").innerText = student.email;

        } else {

            document.getElementById("studentName").innerText = "No Data";
            document.getElementById("studentEmail").innerText = user.email;

        }

    } catch (error) {

        console.log(error);
        alert(error.message);

    }

});


// Logout
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", async () => {

        try {

            await signOut(auth);

            alert("Logout Successful ✅");

            window.location.href = "login.html";

        } catch (error) {

            alert(error.message);

        }

    });

}