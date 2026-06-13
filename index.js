const loginTab = document.getElementById('login-tab');
const createTab = document.getElementById('create-tab');

const formTitle = document.querySelector('.form-area h3');
const descText = document.querySelector('.form-area .desc');

const dobLabel = document.getElementById('dob-label');
const dobInput = document.getElementById('dob-input');

const saveDataButton = document.getElementById("save-data")
const checkdataBtn = document.getElementById("check-data")


const passwordInput = document.getElementById('password-input');
const teacherBtn = document.getElementById('teacher-btn');



loginTab.addEventListener("click", function () {



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

  clearErrors()



})

createTab.addEventListener("click", function () {



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

clearErrors()




})


function clearErrors() {

    document.getElementById("email-error").innerText = "";
    document.getElementById("email-error").classList.add("display");

    document.getElementById("password-error").innerText = "";
    document.getElementById("password-error").classList.add("display");

    document.getElementById("dob-error").innerText = "";
    document.getElementById("dob-error").classList.add("display");
}
