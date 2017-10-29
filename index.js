
function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

var cartItems=[];
var cart=[];

function addToCart(item) {
  var num=Math.random()*100;
  var itemPrice=Math.floor(num);
  cartItems.push(item);
  Object.assign(cart, { [item]:itemPrice });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
var array=[];
if(cart<=[]) {
  console.log("Your shopping cart is empty.");
}
  for(var i=0;i<cart.length;i++) {
    array.push(` ${cart[i]} at $${cartPrice[cart[i]]}`);
  }
console.log(`In your cart, you have${array.slice(0,-1)}, and${array.slice(-1)}.`);
}


function total() {
  var totalPrice=0;
  for(var i=0;i<cart.length;i++) {
    totalPrice+=cartPrice[cart[i]];
  }
}

function removeFromCart(itemName) {
var counter=0;
  for(var i=0;i<cart.length;i++) {
    if(itemName===cart[i]) {
      delete cartPrice[cart[i]];
      cart.splice(i,1);
      return cart;
    }
  }
  return cart;
}

function placeOrder(creditCard) {
  if(!creditCard) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else {
    console.log(`Your total cost is ${total()}, which will be charged to the card ${creditCard}.`);
    for(var i=cart.length;i>0;i--) {
      delete cartPrice[cart[i-1]];
      cart.pop();
    }
    return cart;
  }
}
