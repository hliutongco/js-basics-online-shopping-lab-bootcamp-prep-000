
function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

var cartItems=[];
var cartPrice=[];
var cart=[];

function addToCart(items) {
  var num=Math.random()*100;
  var itemPrice=Math.floor(num);
  cartItems.push(items);
  cartPrice.push(itemPrice);
  var newObject={ [items]:itemPrice };
  cart.push(newObject);
  console.log(`${items} has been added to your cart.`);
  return cart;
}

/*function viewCart() {
var array=[];
if(cart<=[]) {
  console.log("Your shopping cart is empty.");
}
  for(var i=0;i<cart.length;i++) {
    array.push(` ${cartItems[i]} at $${cartPrice[i]}`);
  }
  if(cart.length===1) {
    console.log(`In your cart, you have${array}.`);
  }
  else if(cart.length===2) {
    console.log(`In your cart, you have${array[0]} and${array[1]}.`);
  }
  else {
    console.log(`In your cart, you have${array.slice(0,-1)}, and${array.slice(-1)}.`);
  } */

  function total() {
    var totalPrice=0;
    for(var i=1;i<cart.length;i++) {
      totalPrice+=cartPrice[i];
    }
    return totalPrice;
  }
