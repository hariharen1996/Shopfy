import './src/nav/navbar.js'
import './src/nav/cartSidebar.js'
import './src/products/products.js'
import './src/nav/activeLinks.js'

import fetchProducts from './src/products/fetchProducts.js'
import { setUpLocal, store } from './src/store/store.js'
import { isLoggedIn, productContainer } from './src/main/utils.js'
import displayProducts from './src/products/displayProducts.js'

let productsBtn = document.querySelector('#shopBtn')
let logoutBtn = document.querySelector('.logout-nav-btn')
let logoutMbBtn = document.getElementById('logoutMbBtn')
let loginBtn = document.getElementById('loginBtn')
let loginMbBtn = document.getElementById('loginMbBtn')
let cartBtn = document.querySelector('.cart-icon-container')


const shopProductsBtn = () => {
    productsBtn.addEventListener('click', () => {
        if(isLoggedIn()){
            loginBtn.style.display = 'none'
            loginMbBtn.style.display = 'none'
            logoutBtn.classList.remove('logoutrm-btn')
            logoutMbBtn.style.display = 'block'
            window.location.href = './products.html'
        }else{
            loginBtn.style.display = 'block'
            loginMbBtn.style.display = 'block'
            logoutBtn.classList.add('logoutrm-btn')
            logoutMbBtn.style.display = 'none'
            alert('Please Login to shop at shopfy')
            window.location.href = './login.html'
        }
    })
}


const changeLogout = () => {
    if (isLoggedIn()) {
        loginMbBtn.style.display = 'none'
        loginBtn.style.display = 'none'
        logoutBtn.classList.remove('logoutrm-btn')
        logoutMbBtn.style.display = 'block'
    } else {
        loginMbBtn.style.display = 'block'
        loginBtn.style.display = 'block'
        logoutMbBtn.style.display = 'none'
        logoutBtn.classList.add('logoutrm-btn')
    }
}

const displayCartbtn = () => {
    if(isLoggedIn()){
        cartBtn.style.display = 'block'
    }else{
        cartBtn.style.display = 'none'
    }
} 

const api = async () => {
    const products = await fetchProducts()

    if(products){
        setUpLocal(products)
        displayProducts(store, productContainer)
    }
}

window.addEventListener("DOMContentLoaded",() => {
    api()
    changeLogout()
    displayCartbtn()
    shopProductsBtn()
})


