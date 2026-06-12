const loginTab = document.getElementById('login-tab');
const createTab = document.getElementById('create-tab');



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