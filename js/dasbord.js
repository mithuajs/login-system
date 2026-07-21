import { auth, db } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} 
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


import {
    doc,
    getDoc
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";



// Check User Login

onAuthStateChanged(auth, async (user)=>{


    if(!user){

        window.location.href="login.html";

        return;

    }


    try{


        const docRef = doc(
            db,
            "students",
            user.uid
        );


        const docSnap = await getDoc(docRef);



        if(docSnap.exists()){


            const data = docSnap.data();


            document.getElementById("studentName").innerText = data.name;

            document.getElementById("studentRoll").innerText = data.roll;

            document.getElementById("studentGroup").innerText = data.group;

            document.getElementById("studentEmail").innerText = data.email;

            document.getElementById("studentPhone").innerText = data.phone;


        }


    }
    catch(error){

        console.log(error);

    }



});





// Logout Button

const logoutBtn = document.getElementById("logoutBtn");


if(logoutBtn){


    logoutBtn.addEventListener("click", async()=>{


        try{


            await signOut(auth);


            alert("Logout Successful ✅");


            window.location.href="login.html";


        }

        catch(error){

            console.log(error);

        }


    });


}