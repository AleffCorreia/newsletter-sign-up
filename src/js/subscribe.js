window.onload = function (){
    let sbEmail = document.getElementById('subEmail');
    sbEmail.textContent = getValueLocalStage();
   


   
}

function getValueLocalStage() {
    let email = localStorage.getItem('localEmail');

    if (email == null) {
        email = ""
    }

    return email;
}