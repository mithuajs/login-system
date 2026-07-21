// Firebase Import

import { auth } from "./firebase.js";


import {

    signInWithEmailAndPassword

} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";





// Login Button

const loginBtn = document.getElementById("loginBtn");



loginBtn.addEventListener("click", async () => {



    // Get Value

    const email = document.getElementById("loginEmail").value.trim();

    const password = document.getElementById("loginPassword").value;



    // Validation

    if(!email || !password){

        alert("Email এবং Password দিন");

        return;

    }





    try{


        // Firebase Login

        await signInWithEmailAndPassword(

            auth,

            email,

            password

        );



        alert("Login Successful ✅");



        // Dashboard Redirect

        window.location.href = "dashboard.html";



    }



    catch(error){


        if(error.code === "auth/invalid-credential"){


            alert("Email অথবা Password ভুল");


        }


        else if(error.code === "auth/invalid-email"){


            alert("সঠিক Email দিন");


        }


        else{


            alert(error.message);


        }


    }



});