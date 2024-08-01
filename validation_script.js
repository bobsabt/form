let emailField = document.getElementById("email");
let envelopeIcon = document.getElementById("envelope-icon");
let emailError = document.getElementById("email-error");

let usernameField = document.getElementById("username");
let userIcon = document.getElementById("user-icon");
let usernameError = document.getElementById("username-error");

function emailValidation() {
  if (
    !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailError.innerHTML = "Please enter a valid email addres";
    envelopeIcon.style.color = "red";
    return false;
  }
  emailError.innerHTML = "";
  envelopeIcon.style.color = "#fff";
  return true;
}

function usernameValidation() {
  if (usernameField.value.length < 2) {
    usernameError.innerHTML = "Username must have been at least 2 character";
    userIcon.style.color = "red";
    return false;
  }
  usernameError.innerHTML = "";
  userIcon.style.color = "#fff";
  return true;
}
