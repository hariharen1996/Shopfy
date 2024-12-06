import { getLocalStorage, setLocalStorage } from "../main/utils.js"

let store = getLocalStorage("shopify")

let setUpLocal = (data) => {
    store = data.map((items) => {
        let { fields: { colors,company,featured,name,price, image },id } = items 
        let images = image.map((item) => {
            return item.thumbnails.large.url
        })
        return { colors,company,featured,name,price,id,images }
    })

    setLocalStorage("shopify",store)
}

const findProduct = (id) => {
    let products = store.find(items => items.id === id)
    return products
}

export { store, setUpLocal,findProduct }