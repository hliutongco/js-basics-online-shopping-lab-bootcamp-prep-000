
function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

var cartItems=[];
var cart=[];


function addToCart(items) {
  var num=Math.random()*100;
  var itemPrice=Math.floor(num);
  var newObject={ [items]:itemPrice };
  cartItems.push(items);
  Object.assign(cart, newObject);
  console.log(`${items} has been added to your cart.`);
  return cart;
}
addToCart("poop");