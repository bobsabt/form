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
let formMsg = document.getElementById("form-msg");

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
    formMsg.innerHTML = "";
    if (emailField.value.length != 0 && 
        !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
    ) {
        emailError.innerHTML = "Please enter a valid email address";
        envelopeIcon.style.color = "rgb(170, 17, 17)";
        userBox.style.marginTop = "15px";
        return false;
    }
    emailError.innerHTML = "";
    envelopeIcon.style.color = "#fff";
    userBox.style.marginTop = "30px";
    return true;
}

function usernameValidation() {
    formMsg.innerHTML = "";
    if (usernameField.value && usernameField.value.length < 2) {
        usernameError.innerHTML = "Username must have been at least 2 character";
        userIcon.style.color = "rgb(170, 17, 17)";
        passwordBox.style.marginTop = "15px";
        return false;
    }
    usernameError.innerHTML = "";
    userIcon.style.color = "#fff";
    passwordBox.style.marginTop = "30px";
    return true;
}

// at least one number and one uppercase letter, length between 6-16, it can contain '!@#$%^&*'
const regularExpression = /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

function passwordValidation() {
    formMsg.innerHTML = "";
    if (!regularExpression.test(passwordField.value) && passwordField.value.length > 0) {
        passwordError.innerHTML =
            "Password must have contain at least 1 number and 1 uppercase letter, length 6-16";
        passwordIcon.style.color = "rgb(170, 17, 17)";
        return false;
    }
    passwordError.innerHTML = "";
    passwordIcon.style.color = "#fff";


    return true;
}

function formValidation() {
  if (
    emailField.value.length > 0 &&
    emailValidation() &&
    usernameField.value.length > 0 &&
    usernameValidation() &&
    passwordField.value.length > 0 &&
    passwordValidation()
  ) {
        formMsg.innerHTML = "Thank you for your registration!";
        formMsg.style.color = "black";
        emailField.value = "";
        usernameField.value = "";
        passwordField.value = "";
  } else {
        formMsg.innerHTML = "Your registration is not complete, please fill every field";
  }
}
