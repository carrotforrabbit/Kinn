function subscribeMe() {
    const result = document.getElementById('subscribe').value;
    const error = document.getElementById('signupError');

    error.innerHTML = '';

    if (result == '') {
    signupError.innerHTML = 'Please enter your email address';
    error.style.backgroundColor = '#FFF6F6';
    error.style.border = '1px solid #D02D2F';
}
    else if (!result.includes('@')) {
    signupError.innerHTML = 'Email address should contain @. Please enter a valid email address';
    error.style.backgroundColor = '#FFF6F6';
    error.style.border = '1px solid #D02D2F';
}
}

function submitForm() {
    const nameInput = document.getElementById('formName').value;
    const emailInput = document.getElementById('formMail').value;
    const phoneInput = document.getElementById('formPhone').value;
    const error = document.getElementById('formError');

    error.innerHTML = '';

    if (nameInput == '') {
    error.innerHTML += '&#8226; Name cannot be blank. Please enter your name. <br>';
    error.style.backgroundColor = '#FFF6F6';
    error.style.border = '1px solid #D02D2F';
}
    if (emailInput == '') {
    error.innerHTML += '&#8226; Email cannot be blank. Please enter your mail. <br>';
    error.style.backgroundColor = '#FFF6F6';
    error.style.border = '1px solid #D02D2F';
}
    if (!emailInput.includes('@')) {
    error.innerHTML += '&#8226; Email address should contain @. <br>';
    error.style.backgroundColor = '#FFF6F6';
    error.style.border = '1px solid #D02D2F';
}
    if (phoneInput == '') {
    error.innerHTML += '&#8226; Phone cannot be blank. Please enter your phone number. <br>';
    error.style.backgroundColor = '#FFF6F6';
    error.style.border = '1px solid #D02D2F';
}
}
    
function changeName() {
    const field = document.getElementById('addName');

    field.style.visibility = "visible";
}

function changeMail() {
    const field = document.getElementById('addMail');

    field.style.visibility = "visible";
}

function changePhone() {
    const field = document.getElementById('addPhone');

    field.style.visibility = "visible";
}

function changeMessage() {
    const field = document.getElementById('addMessage');

    field.style.visibility = "visible";
}