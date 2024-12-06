import { productContainer, radioContainer } from "../main/utils.js"
import displayProducts from "../products/displayProducts.js"



const singleFilter = (data) => {
    if (window.location.pathname !== '/products.html') {
        return;  
    }
    let btnCategory = ['all',...new Set(data.map((items) => items.company))]

    radioContainer.innerHTML = btnCategory.map((btns) => {
        return `
                <input type="radio" class="company-radio" name="company" value=${btns} /> 
                <label for=${btns}>${btns}</label>
                <br />
            `
    }).join("")

    radioContainer.addEventListener("click", (e) => {
        if(e.target.classList.contains("company-radio")){
            let value = e.target.value;
            if(value === 'all'){
                displayProducts(data,productContainer,true)
            }else{
                let newData = data.filter((items) => {
                    return items.company === value;
                })

                displayProducts(newData,productContainer,true)
            }
        }
    })
}



export default singleFilter