let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");
console.log(password)
console.log(eyeicon)

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.className = "bx bxs-show";
    } else {
        password.type = "password";
        eyeicon.className = "bx bxs-hide";
    }
}
