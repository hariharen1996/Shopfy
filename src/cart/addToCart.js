import { formatPrice, getLocalStorage, setLocalStorage } from "../main/utils.js";
import { displayCart } from "../nav/cartSidebar.js";
import { findProduct } from "../store/store.js";
import cartDom from "./cartDom.js";

let cartItems = document.querySelector('.cart-items')
let cartTotalEl = document.querySelector('.cart-total')
let cartCountEl = document.querySelector('.cart-number')
//console.log(cartTotalEl)
let cartItemsLocal = getLocalStorage('cart')

export const addToCart = (id) => {
    let item = cartItemsLocal.find((items) => items.id === id)
    //console.log(item)
    if(!item){
        let product = findProduct(id)
        //console.log(product)
        product = { ...product, amount: 1 }
        cartItemsLocal.push(product)

        cartDom(product)
    }else{
        let amount = increaseAmt(id)
        let amtEl = [...cartItems.querySelectorAll('.cart-item-amount')]
        let newAmt = amtEl.find((item) => item.dataset.id === id)
        
        if(newAmt){
            newAmt.textContent = amount
        }
    }

    totalCartItems()
    cartPrice()
    setLocalStorage('cart',cartItemsLocal)
    displayCart()
}

const displayCartItems = () => {
    cartItemsLocal.forEach((item) => {
        cartDom(item)
    })
}

const mainCart = () => {
    cartItems.addEventListener('click',(e) => {
        let element = e.target
        let parent = e.target.parentElement
        let id = e.target.dataset.id;
        let parentId = e.target.parentElement.dataset.id 
        //console.log(element.parentElement.parentElement)  
        //console.log(parent)

        if(parent.classList.contains('cart-item-increase-btn')){
            let newAmt = increaseAmt(parentId)
            parent.nextElementSibling.textContent = newAmt
        }


        if(parent.classList.contains('cart-item-decrease-btn')){
            let newAmt = decreaseAmt(parentId)
            //console.log(newAmt)
            if(newAmt === 0){
                removeItems(parentId)
                parent.parentElement.parentElement.remove()
            }else{
                parent.previousElementSibling.textContent = newAmt
            }
        }

        if(element.classList.contains('cart-item-remove-btn')){
            removeItems(id)
            element.parentElement.parentElement.remove()
        }

        totalCartItems()
        cartPrice()
    })
}


const increaseAmt = (id) => {
    let newAmt;
    cartItemsLocal = cartItemsLocal.map((item) => {
        //console.log(item)
        if(item.id === id){
            newAmt = item.amount + 1;
            item.amount = newAmt
        }
        return item
    })
    return newAmt
}


const decreaseAmt = (id) => {
    let newAmt;
    cartItemsLocal = cartItemsLocal.map((item) => {
        if(item.id === id){
            newAmt = item.amount - 1 
            item.amount = newAmt
        }
        return item
    })
    return newAmt
}


const removeItems = (id) => {
    cartItemsLocal = cartItemsLocal.filter((items) => items.id !== id)
    setLocalStorage('cart',cartItemsLocal)
}

let totalCartItems = () => {
    let totalItems = cartItemsLocal.reduce((qty,items) => {
        return qty += items.amount 
    },0)
    cartCountEl.textContent = totalItems
}

let cartPrice = () => {
    let totalPrice = cartItemsLocal.reduce((initialValue,items) => {
        return initialValue += (items.price * items.amount)
    },0)

    cartTotalEl.textContent = `Total: ${formatPrice(totalPrice)}`

    setLocalStorage("cart",cartItemsLocal)
}



const config = () => {
    displayCartItems();
    totalCartItems()
    cartPrice()
    mainCart()
}

config()