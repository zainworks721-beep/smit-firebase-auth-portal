import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./fireBaseConfig.js"

const passwordInput = document.getElementById('password-input');
const cnicInput = document.getElementById("cnic-input")



createUserWithEmailAndPassword(auth, cnicInput.value, passwordInput.value)
    .then((res) => {
        const user = res.user;
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error -->", errorMessage);
        console.log("error code -->", errorCode);

        if (errorCode == "auth/weak-password") {
            console.log("Password must be 6 characters reqiured");
        }

    });
