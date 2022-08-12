let add = document.getElementById("quantity-up")
let subtract = document.getElementById("quantity-down")
const textQuantity = document.getElementsByClassName("total-quantity")
let quantity = 1;
let remove = document.getElementsByClassName("remove")
const cartContent = document.getElementsByClassName("cart-item")

//click events
add.addEventListener('click', function(){
    quantity++;
    textQuantity[0].textContent = 'Quantity: ' + quantity;
})
subtract.addEventListener('click', function(){
    if (quantity != 0)
    {
        quantity--;
        textQuantity[0].textContent = 'Quantity: ' + quantity;
    }
})
remove[0].addEventListener('click', function(){
    cartContent[0].parentNode.removeChild(cartContent[0]);
})