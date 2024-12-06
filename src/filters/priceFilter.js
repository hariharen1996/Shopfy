import { productContainer } from "../main/utils.js"
import displayProducts from "../products/displayProducts.js"


const priceFilter = (data) => {

    if (window.location.pathname.indexOf("products.html") === -1) {
        return;
    }

    let priceInp = document.querySelector(".price-filter")
    let priceValue = document.querySelector(".price-value")

    let maximumPrice = data.map((item) => item.price)
    //console.log(maximumPrice)
    maximumPrice = Math.max(...maximumPrice)
    maximumPrice = Math.ceil(maximumPrice / 100)
    
    priceInp.value = maximumPrice
    priceInp.max = maximumPrice
    priceInp.min = 0
    priceValue.textContent = `Value: ${maximumPrice}`

    priceInp.addEventListener("change", () => {
        let value = parseInt(priceInp.value)
        priceValue.textContent = `Value: ${value}`
        let products = data.filter((items) => {
           return items.price / 100 <= value 
        })
        displayProducts(products,productContainer,true)
        if(products.length < 1){
            let product = productContainer
            product.innerHTML = `
            <div class="filter-errors">    
                <h1>Sorry, no products found</h1>
            </div>
            `
        }
    })
}

export default priceFilter