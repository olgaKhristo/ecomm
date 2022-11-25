console.log('hi')
//to asing var
const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');

//main cart where we get info from local storage
let cart = [];

//getting the products
class Products{
 async getProducts(){
    try {
        let result = await fetch("product.json")
        let data = await result.json();
        let products = data.items;
        products = products.map(item =>{
            const {title, price} = item.fields;
            const {id} = item.sys;
            const image =  item.fields.image.fields.file.url;
            return {title, price, id, image}
        })
        return products
    } catch (error) {
        console.log(error)
    }
  
}
}

//display products ui
class UI {
displayProducts(products){
let result = ' '
products.forEach(product => {
    result += `
     <!--single product-->
        <!--<article class="products">
            <div class="img-container">
                <img  class="product-img" src=${product.image} alt="">
                <button class="bag-btn" data-id=${product.id}><i class="fas fa-shopping-cart"></i>add to bag</button>
            </div>
            <h3>Konkani Camback</h3>
            <h4>£28.00</h4>
        </article>-->
        //<!--end of single product-->
    `
});
}
}
//local storage
class Storage {

}

document.addEventListener("DOMContentLoaded", ()=>{
    const ui = new UI();
    const products = new Products();

    //get all products
products.getProducts().then(products => ui.displayProducts(products))
})

