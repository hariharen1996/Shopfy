import '../nav/navbar.js'
import '../nav/cartSidebar.js'
import '../nav/activeLinks.js'

import fetchProducts from './fetchProducts.js'
import { setUpLocal, store } from '../store/store.js'
import searchFilter from '../filters/searchFilter.js'
import priceFilter from '../filters/priceFilter.js'
import multipleFilter from '../filters/multipleFilter.js'
import singleFilter from '../filters/singleFilter.js'
import tabFilter from '../filters/tagFilter.js'
import {  isLoggedIn, productContainer, productLoading, updateUserName, user } from '../main/utils.js'
import displayProducts from './displayProducts.js'


let productLink = document.querySelector("#productLink")



const api = async () => {
    if (window.location.pathname !== '/products.html') {
        return; 
    }

    updateUserName()

    const loading = productLoading

    let clearBtn = document.querySelector("#clearBtn")
    
    if(store.length < 1){
        const response = await fetchProducts()
        setUpLocal(response)    
    }
    displayProducts(store,productContainer)

    searchFilter(store)
    priceFilter(store)
    singleFilter(store)
    multipleFilter(store)
    tabFilter(store)
    loading.style.display = 'none'


    clearBtn.addEventListener("click", () => {
        let checkCatgeory = document.querySelectorAll(".company-check")
        let radioCategory = document.querySelectorAll(".company-radio")
        let priceInp = document.querySelector(".price-filter")
        let priceValue = document.querySelector(".price-value")
        let searchInput = document.querySelector(".search-input")

        searchInput.value = ""

        checkCatgeory.forEach((items) => {
            items.checked = false;
        })

        radioCategory.forEach((items) => {
            items.checked = false;
        })

        let maximumPrice = store.map((item) => item.price)
        maximumPrice = Math.max(...maximumPrice)
        maximumPrice = Math.ceil(maximumPrice / 100)
    
        priceInp.value = maximumPrice
        priceInp.max = maximumPrice
        priceInp.min = 0
        priceValue.textContent = `Value: ${maximumPrice}`

        displayProducts(store,productContainer,true)
    })
}

api()

