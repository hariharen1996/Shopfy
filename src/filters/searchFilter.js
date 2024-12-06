import { productContainer } from "../main/utils.js"
import displayProducts from "../products/displayProducts.js"
import { store } from "../store/store.js"


const searchFilter = (data) => {
    let form = document.querySelector(".search-form")
    let searchInp = document.querySelector(".search-input")

    if(form){
    form.addEventListener("keyup",(e) => {
        e.preventDefault()
        let value = searchInp.value;
        //console.log(value)
        if(value){
            let searchProducts = data.filter((item) => {
                return item.name.toLowerCase().includes(value.toLowerCase())
            })
            
            displayProducts(searchProducts,productContainer,true)
    
            if(searchProducts < 1){
                let product = productContainer
                product.innerHTML = `
                <div class="filter-errors">    
                     <h1>Sorry, no products found</h1>
                </div>
                `
            }
        }else{
            displayProducts(store,productContainer,true)
        }
        
    })
}
}

export default searchFilter