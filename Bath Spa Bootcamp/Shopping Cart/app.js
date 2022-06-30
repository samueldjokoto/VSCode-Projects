//SELECTORS
const itemTitle =  document.querySelector('[data="product-title"]').innerHTML = "T-Shirt";
const itemSummary =  document.querySelector('[data="summary"]').innerHTML = "Plain white cotton T-shirt made in Britain. A great accessory for the summer!"
const itemPrice = document.querySelector('[data="price"]').innerHTML = "£20";
const itemSize = document.querySelector('[data="size"]');
const itemQuantity = document.querySelector('[data="quantity"]').value.innerHTML = "";
const quantityInput = document.querySelector('select');
const sizeInput = document.querySelector('#size');
const myButton = document.querySelector('.addTo-btn');
const shoppingCart = document.querySelector('#shoppingCart');
let quantity = 0;
let size = "";

//OBJECTS
const item = {
  item: [data="product-title"],
  summary: [data="summary"],
  price: [data="price"],
  size: [data="size"],
  quantity: [data="quantity"]
}


//EVENT LISTENERS
myButton.addEventListener('click', cartAlert);
    


//FUNCTIONS
function cartAlert() {
    const cart = document.getElementById('shoppingCart')
    const newCartItem = document.createElement('li')
    newCartItem.append(size)
    newCartItem.append(quantity)
    cart.append(newCartItem)
};


function numEntry(input){
    quantity = input
    console.log(quantity)
}

function sizeEntry(input){
    size = input

}

function changeBackground(input){
    document.querySelector('#value-display').input.value;
}


// ADD ITEM TO CART
function addToCart(e) {
    let item = e.target.id
    let itemToAdd = document.getElementById(item)
    let itemName = ('[data="product-title"]').innerText
    let itemPrice = ('[data="price"]').innerText

    let cartItemAdd = document.getElementById("cartItem")
    let newItemName = document.createElement("li")
    newItemName.innerText = itemName
    cartItemAdd.appendChild(newItemName)

    let newPrice = document.createElement('li')
    newItemName.innerText = itemName
    cartItemAdd.appendChild(newPrice)

    let cartItemPrice = document.createElement('li')
    newItemName.innerText = itemName
    cartItemAdd.appendChild(cartItemPrice)
}

function removeItem(){

}

// ADJUST PRICE OF ITEM
function addItemCount(e){
}


//SHOW ITEM IN BASKET NOTIFICATION





