let button = document.getElementById("reg-btn");
let emailField = document.getElementById("email");
let usernameField = document.getElementById("username");
let passwordField = document.getElementById("password");
console.log(emailField.length())


if(emailField.length < 0 || usernameField.length < 0 || passwordField.length < 0 ){
    button.disabled = true;
    console.log("hi")
}