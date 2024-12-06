import '../nav/navbar.js'
import '../nav/cartSidebar.js'
import '../nav/activeLinks.js'

import { formatPrice, singleProductUrl, updateUserName } from "../main/utils.js";
import { addToCart } from '../cart/addToCart.js';



let loading = document.querySelector(".product-loading")
let singleProductCenter = document.querySelector('.single-products-center')
const pageTitle = document.querySelector('.single-products-heading');
const img = document.querySelector('.single-products-img');
const title = document.querySelector('.single-products-title');
const companyEl = document.querySelector('.single-products-company');
const priceEl = document.querySelector('.single-products-price');
const desc = document.querySelector('.single-products-desc');
const cartBtnEl = document.querySelector('.addToCartBtn');


let productID;

window.addEventListener("DOMContentLoaded", async () => {
    if(!navigator.onLine){
        singleProductCenter.innerHTML = `
                <div class-'single-error'>
                    <h3 class="single-error-message er">Your offline, please check your internet connection</h3>
                </div>
        `
    }

    const urlID = window.location.search
    //console.log(urlID)
    try{
        let response = await fetch(`${singleProductUrl}${urlID}`)
        if(response.status >= 200 && response.status <= 299){
            let data = await response.json()
            //console.log(data)
            let { id,fields } = data 
            let { name,company,price,description,image } = fields
            let images = image.map((item) => {
                return item.thumbnails.large.url
            })
            //console.log(images.join(""))
            productID = id 
            document.title = `Shopify | ${name.toUpperCase()}`
            img.src = images.join("")
            title.textContent = name 
            companyEl.textContent = `by ${company}`
            priceEl.textContent = `Price: ${formatPrice(price)}` 
            desc.textContent = description
            pageTitle.textContent = name
        }else{
            singleProductCenter.innerHTML = `
                <div>
                    <h3 class="error-message er">Sorry, something went wrong</h3>
                </div>
            `
        }
    }catch(error){
        console.log(error)
    }

    loading.style.display = 'none'

    updateUserName()
    
})

cartBtnEl.addEventListener("click", (e) => {
    addToCart(productID)
})