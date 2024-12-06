import { user } from '../main/utils.js'
import '../nav/activeLinks.js'
import '../nav/navbar.js'

let form = document.getElementById('loginForm')
let userInp = document.getElementById('loginUser')
let emailInp = document.getElementById('loginEmail')
let userErr = document.getElementById('userError')
let emailErr = document.getElementById('emailError')
let loginErr = document.getElementById('loginError')


//console.log(user)

export let isLoggedIn = false

let loginformData = {
    username: "",
    email: "",
}

userInp.addEventListener('change', (e) => {    
    //console.log(formData.username)
    if(e.target.value === ""){
        userErr.textContent = '*Required'
    }else{
        userErr.textContent = ''
    }

    loginformData.username = e.target.value
})

emailInp.addEventListener('change', (e) => {
    if(e.target.value === ""){
        emailErr.textContent = '*Required'
    }else{
        emailErr.textContent = ''
    }

    loginformData.email = e.target.value
})


function validateForm(data){
    const { username,email } = data 
    let isValid = true
    if(username === ""){
        userErr.textContent = '*Required'
        isValid = false
    }else if(user.name !== username.trim()){
        userErr.textContent = 'Please enter valid username'
        isValid = false
    }

    if(email === ""){
        emailErr.textContent = '*Required'
        isValid = false
    }else if(user.email !== email){
        emailErr.textContent = 'Please enter valid email'
        isValid = false
    }

    return isValid
}

function loginForm(e){
    e.preventDefault()
    let username = userInp.value;
    let email = emailInp.value;


    if (!user) {
        loginErr.textContent = 'No user found. Please sign up first.'
        return
    }

    if(username === user.name && email === user.email && validateForm(loginformData)){
        alert("LoggedIn. shop at Shopfy")
        window.location.href = './products.html'
        isLoggedIn = true
    }else{
        validateForm(loginformData)
        isLoggedIn = false 
    }
}



form.addEventListener('submit',loginForm)