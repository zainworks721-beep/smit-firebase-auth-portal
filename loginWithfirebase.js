import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./fireBaseConfig.js"

const cnicInput = document.getElementById("cnic-input")

let form = document.getElementById("save-data")

form.addEventListener(onclick, () => {


    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');


    createUserWithEmailAndPassword(auth, emailInputInput.value, passwordInput.value)
        .then((res) => {
            const user = res.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error -->", errorMessage);
            console.log("error code -->", errorCode);


        });
})


