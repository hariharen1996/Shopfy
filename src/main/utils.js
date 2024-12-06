
const productsUrl = 'https://www.course-api.com/javascript-store-products';

const singleProductUrl =
  'https://www.course-api.com/javascript-store-single-product';


let name = document.querySelector('.name')
let mbname = document.querySelector('#mbName')



const getLocalStorage = (key) => {
    let item = localStorage.getItem(key)
    if(item){
      item = JSON.parse(localStorage.getItem(key))
    }else{
      item = []
    }

    return item
}


const setLocalStorage = (key,data) => {
  localStorage.setItem(key,JSON.stringify(data))
}

const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format((price).toFixed(2));
  return formattedPrice;
};

const isLoggedIn = () => {
  let user = JSON.parse(sessionStorage.getItem('user'))
  return user != null
}



let user = JSON.parse(sessionStorage.getItem('user')) || null 


function updateUserName(){
  if(isLoggedIn()){
    name.textContent = user.name.toUpperCase()
    mbname.textContent = user.name.toUpperCase()
    
  }
}




export const productLoading = document.querySelector(".product-loading")
export const productContainer = document.querySelector(".product-container")
export const radioContainer = document.querySelector(".radio-container")
  



  export { productsUrl,singleProductUrl,getLocalStorage,setLocalStorage,formatPrice,isLoggedIn,user,updateUserName }
  