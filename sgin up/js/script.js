
var signedName = document.getElementById("inName");
var signedEmail = document.getElementById("inEmail");
var signedPassword = document.getElementById("inPassword");
var signUpBtn = document.getElementById("signUpBtn");
var requiredError = document.getElementById("requiredError");
var addedSuccessfully = document.getElementById("addedSuccessfully");

var usersArray = [];

var storageArray = JSON.parse(localStorage.getItem("users"));

if (storageArray !== null) {
  usersArray = storageArray;
}


var nameRegex = /^[a-zA-Z0-9._-]{3,15}(\s+\w+)*$/;
var mailRegex = /^[a-zA-Z0-9._-]{5,15}@[a-zA-Z0-9-]+\.(com)$/;
var passwordRegex = /^[A-Za-z0-9@#$%^&+=]{8,}$/;

var isValidName = false;
var isValidMail = false;
var isValidPassword = false;

signedName.addEventListener("input", () => {
  isValidName = nameRegex.test(signedName.value);
  if (isValidName) {
    signedName.classList.add("is-valid");
    signedName.classList.remove("is-invalid");
  } else {
    signedName.classList.remove("is-valid");
    signedName.classList.add("is-invalid");
  }
});
signedEmail.addEventListener("input", () => {
  isValidMail = mailRegex.test(signedEmail.value);
  if (isValidMail) {
    signedEmail.classList.add("is-valid");
    signedEmail.classList.remove("is-invalid");
  } else {
    signedEmail.classList.remove("is-valid");
    signedEmail.classList.add("is-invalid");
  }
});
signedPassword.addEventListener("input", () => {
  isValidPassword = passwordRegex.test(signedPassword.value);
  if (isValidPassword) {
    signedPassword.classList.add("is-valid");
    signedPassword.classList.remove("is-invalid");
  } else {
    signedPassword.classList.remove("is-valid");
    signedPassword.classList.add("is-invalid");
  }
});


function clearForm() {
  signedName.value = null;
  signedEmail.value = null;
  signedPassword.value = null;
}


function storeData() {
  if (isValidMail && isValidName && isValidPassword) {
    usersArray.push({
      name: signedName.value,
      email: signedEmail.value,
      password: signedPassword.value,
    });
    localStorage.setItem("users", JSON.stringify(usersArray));
    requiredError.innerHTML = "";
    clearForm();
    addedSuccessfully.innerHTML = "Success";
    signedName.classList.remove("is-valid");
    signedEmail.classList.remove("is-valid");
    signedPassword.classList.remove("is-valid");
  } else {
    requiredError.innerHTML = "All inputs is required";
    addedSuccessfully.innerHTML = "";
  }
}

signUpBtn.addEventListener("click", storeData);








