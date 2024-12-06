
import { productsUrl } from '../main/utils.js'

const fetchProducts = async () => {
    try{
        const response = await fetch(productsUrl)
        const data = await response.json()

        if(!response.ok){
            throw new Error("Please check url")
        }

        return data 
        
    }catch(error){
        console.log(error)
    }
}

export default fetchProducts