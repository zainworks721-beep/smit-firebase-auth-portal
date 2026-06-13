import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "./fireBaseConfig.js"
import { validateEmail, validatePassword, clearErrorOnInput, validateDOB } from "./validation.js"

let allowRedirect = false;

onAuthStateChanged(auth, (user) => {
    if (user && allowRedirect) {
        window.location.replace("dashboard.html");
    }
});

let btn = document.getElementById("save-data")



btn.addEventListener("click", () => {


    const email = document.getElementById('email-input');
    const password = document.getElementById('password-input');
    const dob = document.getElementById("dob-input");

    const dobError = validateDOB(dob.value);
    let emailError = validateEmail(email.value)
    let passwordError = validatePassword(password.value)

    if (email.value === "" && password.value === "" && dob.value === "") {
        document.getElementById("email-error").innerText = emailError
        document.getElementById("email-error").classList.remove("display")
        document.getElementById("dob-error").innerText = dobError;
        document.getElementById("dob-error").classList.remove("display");
        document.getElementById("password-error").innerText = passwordError
        document.getElementById("password-error").classList.remove("display")

        return


    }


    if (emailError) {
        document.getElementById("email-error").innerText = emailError
        document.getElementById("email-error").classList.remove("display")
        return
    }
    if (dobError) {
        document.getElementById("dob-error").innerText = dobError;
        document.getElementById("dob-error").classList.remove("display");
        return;
    }
    else if (passwordError) {
        document.getElementById("password-error").innerText = passwordError
        document.getElementById("password-error").classList.remove("display")
        return
    }

    createUserWithEmailAndPassword(auth, email.value.trim(), password.value)
        .then((res) => {

            const user = res.user;

            if (user) {
                showpopup("Account created!", `<i class="fa-solid fa-check"></i>`)
            }




            email.value = ""
            password.value = ""
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log("Error Code:", error.code);
            console.log("Error Message:", error.message);

            if (errorCode === "auth/email-already-in-use") {

                showpopup("Email already registered.", `<i class="fa-solid fa-xmark"></i>`)

            }

            email.value = ""
            password.value = ""
        });
})


let btn1 = document.getElementById("check-data")


btn1.addEventListener("click", () => {

    const email = document.getElementById("email-input");
    const password = document.getElementById("password-input");

    let emailError = validateEmail(email.value)
    let passwordError = validatePassword(password.value)


    if (email.value === "" && password.value === "") {
        document.getElementById("email-error").innerText = emailError
        document.getElementById("email-error").classList.remove("display")
        document.getElementById("password-error").innerText = passwordError
        document.getElementById("password-error").classList.remove("display")

        return


    }

    if (emailError) {
        document.getElementById("email-error").innerText = emailError
        document.getElementById("email-error").classList.remove("display")
        return
    }
    else if (passwordError) {
        document.getElementById("password-error").innerText = passwordError
        document.getElementById("password-error").classList.remove("display")
        return
    }


    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            if (user) {
                showpopup("Login successful!", `<i class="fa-solid fa-check"></i>`)
                   allowRedirect= true
                email.value = ""
                password.value = ""
                setTimeout(() => {
                    window.location.href = "dashboard.html"
                 
                }, 1800);
            }


        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;


            if (error.code === "auth/user-not-found") {
                showpopup("User not found!", `<i class="fa-solid fa-xmark"></i>`)
                email.value = ""
                password.value = ""
            }

            else if (error.code === "auth/invalid-credential") {
                showpopup("Student doesn't exist", `<i class="fa-solid fa-xmark"></i>`)
                email.value = ""
                password.value = ""
            }

            else {
                showpopup("Login failed!", `<i class="fa-solid fa-xmark"></i>`)
                email.value = ""
                password.value = ""
            }


        });



})

clearErrorOnInput("email-input", "email-error");
clearErrorOnInput("dob-input", "dob-error");
clearErrorOnInput("password-input", "password-error");


function showpopup(mess, errIcon) {

    let changePopup = document.getElementById("changeText")
    let erroricon = document.getElementById("error")

    changePopup.innerText = mess
    erroricon.innerHTML = errIcon

    if (errIcon === `<i class="fa-solid fa-xmark"></i>`) {
        erroricon.classList.remove("sucess")
        erroricon.classList.add("error")
    } else {
        erroricon.classList.remove("error")
        erroricon.classList.add("sucess")
    }

    let toast = document.getElementById("toast")



    toast.classList.add("show")

    setTimeout(() => {

        toast.classList.remove("show")

    }, 3000);

}