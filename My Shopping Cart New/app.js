



// Add item to cart button 
let addToCartButtons = document.getElementsByClassName('shop-item-button')
for ( let i = 0; i < addToCartButtons.length; i++) {
    const button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked)
}

function addToCartClicked(e){
    let button = e.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    let itemImg = shopItem.getElementsByClassName('shop-item-img')[0].src
    console.log(title, price, itemImg)
    addItemToCart(title, price, itemImg)
    updateCartTotal()
}

function addItemToCart (title, price, itemImg){
    let cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (let i = 0; i < cartItemNames.length; i++) {
        if(cartItemNames[i].innerText == title){
            alert('this item is already in the cart')
            return
        }
    }
    let cartRowContents = 
                    `<div class="cart-item cart-column">
                        <img class="cart-item-image" src="${itemImg}" width="100" height="100">
                        <span class="cart-item-title">${title}</span>
                    </div>
                    <span class="cart-price cart-column">${price}</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" type="number" value="1">
                        <button class="btn btn-danger" type="button"><i class="fas fa-trash"></i></button>
                    </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityInput)
}

const quantityInputs = document.getElementsByClassName('cart-quantity-input')
for( let i = 0; i < quantityInputs.length; i++ ){
    const input = quantityInputs[i]
    input.addEventListener('change', quantityInput)
}


// Remove Items from cart button
let removeCartItemButtons = document.getElementsByClassName('btn-danger')

for( let i = 0; i < removeCartItemButtons.length; i++ ){
    const button = removeCartItemButtons[i];
    button.addEventListener('click', removeCartItem)
}

//remove item from cart
function removeCartItem(e) {
        let buttonClicked = e.target
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal()
}

function quantityInput(e){
    let input = e.target
    if (isNaN (input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}

// Update cart total
function updateCartTotal(){
    let cartItemContainer = document.getElementsByClassName('cart-items')[0]
    let cartRows = cartItemContainer.getElementsByClassName('cart-row');
    let total = 0;
    for( let i = 0; i < cartRows.length; i++ ){
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        // console.log(priceElement, quantityElement)
        let price = parseFloat(priceElement.innerText.replace('£', " "))
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }

document.getElementsByClassName('cart-total-price')[0].innerText = '£' + total

}
