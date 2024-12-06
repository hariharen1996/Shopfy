import { productContainer } from "../main/utils.js"
import displayProducts from "../products/displayProducts.js";

const multipleFilter = (data) => {

    if (window.location.pathname !== '/products.html') {
        return; 
    }

    let checkContainer = document.querySelector(".check-container");
    let btnCategory = data.reduce((arr,items) => {
        if(!arr.includes(items.company)){
            arr.push(items.company)
        }
        return arr 
    },['all'])

    checkContainer.innerHTML = btnCategory.map((btns) => {
        //console.log(btns)
        return `
                <input type="checkbox" class="company-check" value=${btns}/> 
                <label>${btns}</label>
                <br />
            `
                    
    }).join("")

    let checkForm = document.querySelector(".check-container")
    checkForm.addEventListener("click", (e) => {
        //let store = [...data]
        let checks = [...document.querySelectorAll(".company-check:checked")].map((item) => item.value)
        //console.log(checks)
        if(checks.length < 1){
            displayProducts(data,productContainer,true)
        }else if(checks.includes('all/')){
            displayProducts(data,productContainer,true)
        }else{
            let newData = data.filter((items) => {
                return checks.includes(items.company + "/")
            })

            displayProducts(newData,productContainer,true)
        }
    })
}


export default multipleFilter