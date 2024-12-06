import { updateUserName } from '../main/utils.js'
import '../nav/activeLinks.js'
import '../nav/cartSidebar.js'
import '../nav/navbar.js'


let logoutBtn = document.getElementById('logoutEl')
let logoutText = document.querySelector('.logout-text')

logoutBtn.addEventListener('click', (e) => {
    //console.log('clicked')
    let confirmLogout = confirm('Are you sure, you want to logout?')
    if(confirmLogout){
        sessionStorage.removeItem('user')
        logoutText.textContent = 'Thanks for shopping at shopfy'
        let id = setTimeout(() => {
            window.location.href = './login.html'
            clearInterval(id)
        },1000) 
    }
     
})


updateUserName()