
const loginTab = document.getElementById('login-tab');
const createTab = document.getElementById('create-tab');

const formTitle = document.querySelector('.form-area h3');
const descText = document.querySelector('.form-area .desc');

const dobLabel = document.getElementById('dob-label');
const dobInput = document.getElementById('dob-input');

const passwordInput = document.getElementById('password-input');
const teacherBtn = document.getElementById('teacher-btn');
const cnicInput = document.getElementById("cnic-input")
const saveDataButton = document.getElementById("save-data")
const checkdataBtn = document.getElementById("check-data")
const portal = document.getElementById("portal")


let inputs = [cnicInput, dobInput, passwordInput,]
let alartMes = document.querySelectorAll(".mes")

let errorText = [
  "CNIC is required",
  "Date of birth is required",
  "Password is required",

]

loginTab.addEventListener("click", function () {

  alartMes.forEach(mes => mes.classList.add("display"));

  loginTab.classList.add('active');
  createTab.classList.remove('active');


  formTitle.innerText = "Login"
  descText.innerText = "'Kindly provide the CNIC number and password used during SMIT course registration."


  dobLabel.style.display = "none"
  dobInput.style.display = "none"

  passwordInput.style.display = "block"
  teacherBtn.style.display = "block"

  saveDataButton.style.display = "none"
  checkdataBtn.style.display = "block"



})

createTab.addEventListener("click", function () {

  alartMes.forEach(mes => mes.classList.add("display"));

  loginTab.classList.remove('active');
  createTab.classList.add('active');


  formTitle.innerText = "Create a Password"
  descText.innerText = "Kindly provide the CNIC number and DOB used during SMIT course registration."


  dobLabel.style.display = "block"
  dobInput.style.display = "block"

  passwordInput.style.display = "block"
  teacherBtn.style.display = "none"

  saveDataButton.style.display = "block"
  checkdataBtn.style.display = "none"






})

let arr = JSON.parse(localStorage.getItem("user")) || []

saveDataButton.addEventListener("click", function () {




  let hasError = false

  inputs.forEach(function (input, index) {

    if (input.value.trim() === "") {
      alartMes[index].innerText = errorText[index]
      alartMes[index].classList.remove("display")
      hasError = true
    } else {
      alartMes[index].classList.add("display")
    }

  })

  if (hasError) return

  let exists = arr.find(u => u.Cnic === cnicInput.value)
  if (exists) { showpopup("CNIC already registered"); return }

  let obj = {
    Cnic: cnicInput.value,
    password: passwordInput.value,
    dob: dobInput.value
  }



  arr.push(obj)

  localStorage.setItem("user", JSON.stringify(arr))

  console.log(arr)

  inputs.forEach(function (input) {
    input.value = ""
  })



  showpopup("submit successfully")

})

checkdataBtn.addEventListener("click", function () {



  alartMes.forEach(mes => mes.classList.add("display"));

  let cnic = cnicInput.value.trim();
  let pass = passwordInput.value.trim();


  if (cnic === "" || pass === "") {
    if (cnic === "") {
      alartMes[0].innerText = "CNIC is required";
      alartMes[0].classList.remove("display");
    }
    if (pass === "") {
      alartMes[2].innerText = "Password is required";
      alartMes[2].classList.remove("display");
    }
    return;
  }

  arr = JSON.parse(localStorage.getItem("user")) || []

  let foundUser = arr.find(user => user.Cnic === cnic && user.password === pass);

  if (foundUser) {
    portal.classList.add("hade")
    showpopup("login successfully")

    cnicInput.value = "";
    passwordInput.value = "";
  } else {
    alert("Invalid CNIC or password");
    cnicInput.value = "";
    passwordInput.value = "";
  }

});


function showpopup(mess) {

  let changePopup = document.getElementById("changeText")
  changePopup.innerText = mess

  let toast = document.getElementById("toast")



  toast.classList.add("show")

  setTimeout(() => {

    toast.classList.remove("show")

  }, 3000);

}













