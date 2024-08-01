let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

let passwordIcon = document.getElementById("password-icon");
let passwordError = document.getElementById("password-error");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.className = "bx bxs-show";
    } else {
        password.type = "password";
        eyeicon.className = "bx bxs-hide";
    }
}

// at least one number, length between 6-16, it can contain '!@#$%^&*' 
const regularExpression = /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

function passwordValidation() {
    if (!regularExpression.test(password.value)){
      passwordError.innerHTML = "Password must have containe at least 1 number";
      passwordIcon.style.color = "red";
      return false;
    }
    passwordError.innerHTML = "";
    passwordIcon.style.color = "#fff";
    return true;
}
