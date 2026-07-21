import {
    initializeApp
} from
    "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";



import {
    getAuth,
    onAuthStateChanged,
    signOut
}
    from
    "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



import {
    getFirestore,
    doc,
    getDoc,
    collection,
    getDocs
}
    from
    "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";





// Firebase Config

const firebaseConfig = {


    apiKey: "AIzaSyAQRxXpTLMp_xZNcs_kxRd98s3itGl3RQk",


    authDomain: "login-project-d0062.firebaseapp.com",


    projectId: "login-project-d0062",


    storageBucket: "login-project-d0062.firebasestorage.app",


    messagingSenderId: "953305927352",


    appId: "1:953305927352:web:64b0e0460edda4acd0ee4d"


};





// Initialize Firebase


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);


const db = getFirestore(app);








// Login User Data


onAuthStateChanged(auth, async (user) => {


    if (user) {



        // নিজের profile


        const userRef = doc(
            db,
            "students",
            user.uid
        );



        const userSnap = await getDoc(userRef);



        if (userSnap.exists()) {


            const data = userSnap.data();



            document.getElementById("studentName")
                .innerText = data.name;



            document.getElementById("studentRoll")
                .innerText = data.roll;



            document.getElementById("studentGroup")
                .innerText = data.group;

            // Navbar welcome name

            document.getElementById("welcomeUser")
                .innerText = data.name;



        }



    }



    else {


        window.location.href = "index.html";


    }



});









// All Student List


async function loadAllStudents() {



    const studentList =
        document.getElementById("studentList");



    studentList.innerHTML = "";



    const querySnapshot =
        await getDocs(
            collection(db, "students")
        );





    querySnapshot.forEach((doc) => {


        const data = doc.data();



        studentList.innerHTML += `


<tr>


<td>${data.name}</td>


<td>${data.roll}</td>


<td>${data.group}</td>


<td>${data.email}</td>


</tr>



`;



    });



}



loadAllStudents();








// Logout


const logoutBtn =
    document.getElementById("logoutBtn");



logoutBtn.addEventListener("click", () => {


    signOut(auth)

        .then(() => {


            alert("Logout Successful");


            window.location.href = "index.html";


        })


        .catch((error) => {


            console.log(error.message);


        });


});