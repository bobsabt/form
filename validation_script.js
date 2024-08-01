let emailField = document.getElementById("email");
let envelopeIcon = document.getElementById("envelope-icon");
let emailError = document.getElementById("email-error");
let userBox = document.getElementById("user-box");

let usernameField = document.getElementById("username");
let userIcon = document.getElementById("user-icon");
let usernameError = document.getElementById("username-error");
let passwordBox = document.getElementById("password-box");

let passwordField = document.getElementById("password");
let eyeicon = document.getElementById("eyeicon");
let passwordIcon = document.getElementById("password-icon");
let passwordError = document.getElementById("password-error");

let button = document.getElementById("reg-btn");

eyeicon.onclick = function () {
  if (passwordField.type == "password") {
    passwordField.type = "text";
    eyeicon.className = "bx bxs-show";
  } else {
    passwordField.type = "password";
    eyeicon.className = "bx bxs-hide";
  }
};

function emailValidation() {
  if (
    !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailError.innerHTML = "Please enter a valid email addres";
    envelopeIcon.style.color = "red";
    userBox.style.marginTop = "15px";
    return false;
  }
  emailError.innerHTML = "";
  envelopeIcon.style.color = "#fff";
  userBox.style.marginTop = "30px";
  return true;
}

function usernameValidation() {
  if (usernameField.value.length < 2) {
    usernameError.innerHTML = "Username must have been at least 2 character";
    userIcon.style.color = "red";
    passwordBox.style.marginTop = "15px";
    return false;
  }
  usernameError.innerHTML = "";
  userIcon.style.color = "#fff";
  passwordBox.style.marginTop = "15px";
  return true;
}

// at least one number and one uppercase letter, length between 6-16, it can contain '!@#$%^&*'
const regularExpression = /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

function passwordValidation() {
  if (!regularExpression.test(passwordField.value)) {
    passwordError.innerHTML =
      "Password must have contain at least 1 number and 1 uppercase letter, length 6-16";
    passwordIcon.style.color = "red";
    return false;
  }
  passwordError.innerHTML = "";
  passwordIcon.style.color = "#fff";
  return true;
}

function buttonDisabled() {
  if (
    emailField.value.length > 0 &&
    emailValidation() &&
    usernameField.value.length > 0 &&
    usernameValidation() &&
    passwordField.value.length > 0 &&
    passwordValidation()
  ) {
    console.log("not disabled");
    button.style.cursor = "not-allowed";
    return true;
  } else {
    button.style.cursor = "not-allowed";
    console.log("disabled");
    return false;
  }
}
