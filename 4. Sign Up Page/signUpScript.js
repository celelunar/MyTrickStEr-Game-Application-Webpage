let email_array = [];

document.getElementById('login').addEventListener('submit', function (event){
    let valid = true;

    // get all input
    const first = document.getElementById('first').value;
    const last = document.getElementById('last').value;
    const email = document.getElementById('mail').value;
    const pass = document.getElementById('pass').value;
    const conf_pass = document.getElementById('conf-pass').value;
    const tnc = document.getElementById('tnc-check');

    // get all error
    const name_error = document.getElementById('name-error');
    const email_error = document.getElementById('mail-error');
    const pass_error = document.getElementById('pass-error');
    const conf_pass_error = document.getElementById('conf-pass-error');
    const tnc_error = document.getElementById('tnc-error');

    // first and last name validation
    if(first.length < 3 || last.length < 3){
        name_error.textContent = "Name must be at least 3 characters!";
        valid = false;
    } else{
        name_error.textContent = '';
    }

    // email validation
    let regex = new RegExp(/\S+@\S+\.\S+/); 
    let mail_check = regex.test(email);
    if(!mail_checks){
        email_error.textContent = "Invalid email format!";
        valid = false;
    } else{
        email_error.textContent = '';
    }

    // password validation
    if(pass.length < 8){
        pass_error.textContent = "Password must be at least 8 characters!";
        valid = false;
    } else{
        pass_error.textContent = '';
    }

    // confirm password validation
    if(conf_pass !== pass){
        conf_pass_error.textContent = "Passwords do not match!";
        valid = false;
    } else{
        conf_pass_error.textContent = '';
    }

    // terms and condition validation
    if(!tnc.checked){
        tnc_error.textContent = "You must agree to the Terms and Conditions!"
        valid = false;
    } else{
        tnc_error.textContent = '';
    }

    if(!valid){
        event.preventDefault();
    }

});