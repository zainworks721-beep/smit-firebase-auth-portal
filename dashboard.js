import { auth, onAuthStateChanged, signOut } from "./fireBaseConfig.js";

onAuthStateChanged(auth, (user) => {

    if (user) {
        console.log("User Login Hai", user.uid);

    } else {
        window.location.href = "./login.html";
    }

});


let logoutBtn = document.getElementById("logoutbtn")

logoutBtn.addEventListener("click", () => {
    signOut(auth)
        .then(() => {
            window.location.replace("index.html");
        });
});