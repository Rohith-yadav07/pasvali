function Validation() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmpassword").value;
    let message = document.getElementById("message");

    if(password.length >= 5) {
        if(password === confirmPassword) {
            message.textContent = "Password match";
            message.style.backgroundColor = "#1dcd59";
        }
        else{
            message.textContent = "wrong Password";
            message.style.backgroundColor = "#ff4d4d";
        }
    }  
    else{
        message.textContent = "password must be above 5";
        massage.style.backgroundColor = "#ff4d4d";
    }
}