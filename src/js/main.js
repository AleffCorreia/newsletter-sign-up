sEmail = ""

function checkEmail() {
    let emailField = document.getElementById("email");
    error = document.getElementById("error_message");

    var valid = true;

    if (!emailField.checkValidity()) {
        emailField.classList.add('bg_error');
        error.style.display = "block";
        valid = false;

    } else {
        emailField.classList.remove('bg_error');
        error.style.display = "none";
        addValueLocalStage(emailField.value)
       

    }

    return valid


}



function addValueLocalStage(value) {
    let email = value;
    localEmail = value;

    localStorage.setItem('localEmail', email);

}