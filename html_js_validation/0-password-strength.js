
// Function to validate the password
function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("error");
  
    
    // Regular expressions for validation
    const lengthRegex = /.{8,}/; //The password must be eight characters or longeR
    const uppercaseRegex = /[A-Z]/; //The password must contain at least one uppercase character
    const lowercaseRegex = /[a-z]/; //The password must contain at least one lowercase character
    const digitRegex = /\d+/; // DIGITS
    const specialCharRegex = /[!@#$%^&*]/; //The password must contain at least one special character.

    
    if(!uppercaseRegex.test(password)){
        passwordError.innerHTML = "The password must contain at least one uppercase letter.";
        return false;
    }
    if(!lowercaseRegex.text(password)){
        passwordError.innerHTML= "The password must contain at least one lowercase letter.";
        return false;
    }
    // check if password contains at least one numeric digit.
    if(!digitRegex.test(password)){
        passwordError.textContent  = "The password must contain at least one numeric digit";
        return false;
    }
    if(!specialCharRegex.test(password)){
        passwordError.textContent  = "The password must contain at least one special character (e.g., !@#$%^&*)";
        return false;
    }
    if(!lengthRegex.test(password)){
        passwordError.innerHTML  = "The password must be at least 8 characters long.";
        return false;
    }
    
    passwordError.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="false">'
    return true;
  
}