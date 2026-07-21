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


registerBtn.addEventListener("click", async () => {


    // Get Input Value

    const name = document.getElementById("registerName").value;

    const roll = document.getElementById("registerRoll").value;

    const group = document.getElementById("registerGroup").value;

    const email = document.getElementById("registerEmail").value;

    const phone = document.getElementById("registerPhone").value;

    const password = document.getElementById("registerPassword").value;



    // Validation

    if(
        !name ||
        !roll ||
        !group ||
        !email ||
        !phone ||
        !password
    ){

        alert("সব তথ্য পূরণ করুন");

        return;

    }



    try{


        // Create Firebase User

        const userCredential = 
        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );


        const user = userCredential.user;



        // Save Student Data Firestore

        await setDoc(
            doc(db,"students",user.uid),
            {

                name:name,

                roll:roll,

                group:group,

                email:email,

                phone:phone,

                uid:user.uid

            }
        );



        alert("Registration Successful ✅");



        // Go Login Page

        window.location.href="login.html";



    }

    catch(error){


        alert(error.message);


    }



});