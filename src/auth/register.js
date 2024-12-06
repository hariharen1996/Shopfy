import '../nav/activeLinks.js';
import '../nav/navbar.js';

let form = document.getElementById('registerForm');
let userInp = document.querySelector('#register-user-inp');
let userEmail = document.querySelector('#register-user-email');
let pwdInp = document.querySelector('#register-user-pwd');
let conPwdInp = document.querySelector('#register-user-con-pwd');
let userErr = document.getElementById('userError');
let emailErr = document.getElementById('emailError');
let pwdErr = document.getElementById('pwdError');
let conErr = document.getElementById('conError');

let formData = {
    user: "",
    email: "",
    pwd: "",
    conPwd: ""
};

userInp.addEventListener('input', (e) => {
    if (e.target.value === "") {
        userErr.textContent = '*Required';
    } else if (/^[a-z\d]{3,12}$/.test(e.target.value)) {
        userErr.textContent = '';
    } else {
        userErr.textContent = 'Please enter valid username';
    }
    formData.user = e.target.value;
});

userEmail.addEventListener('input', (e) => {
    if (e.target.value === "") {
        emailErr.textContent = '*Required';
    } else if (/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/.test(e.target.value)) {
        emailErr.textContent = '';
    } else {
        emailErr.textContent = 'Please enter valid email';
    }
    formData.email = e.target.value;
});

pwdInp.addEventListener('input', (e) => {
    if (e.target.value === "") {
        pwdErr.textContent = '*Required';
    } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(e.target.value)) {
        pwdErr.textContent = '';
    } else {
        pwdErr.textContent = 'Please enter valid password';
    }
    formData.pwd = e.target.value;
});

conPwdInp.addEventListener('input', (e) => {
    if (e.target.value === "") {
        conErr.textContent = '*Required';
    } else if (e.target.value === formData.pwd) {
        conErr.textContent = '';
    } else {
        conErr.textContent = "Password doesn't match";
    }
    formData.conPwd = e.target.value;
});

function validateForm(data) {
    let { user, email, pwd, conPwd } = data;
    let isValid = true;

    if (user === "") {
        userErr.textContent = '*Required';
        isValid = false;
    } else if (!/^[a-z\d]{3,12}$/.test(user)) {
        userErr.textContent = 'Please enter valid username';
        isValid = false;
    }

    if (email === "") {
        emailErr.textContent = '*Required';
        isValid = false;
    } else if (!/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/.test(email)) {
        emailErr.textContent = 'Please enter valid email';
        isValid = false;
    }

    if (pwd === "") {
        pwdErr.textContent = '*Required';
        isValid = false;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pwd)) {
        pwdErr.textContent = 'Please enter valid password';
        isValid = false;
    }

    if (conPwd === "") {
        conErr.textContent = '*Required';
        isValid = false;
    } else if (pwd !== conPwd) {
        conErr.textContent = "Password doesn't match";
        isValid = false;
    }

    return isValid;
}

function registerForm(e) {
    e.preventDefault();

    let data = {
        name: formData.user,
        email: formData.email
    };

    if (validateForm(formData)) {
        sessionStorage.setItem('user', JSON.stringify(data));
        window.location.href = '/login.html';
    }
}

form.addEventListener('submit', registerForm);

