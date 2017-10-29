
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
  cartItems.push(items);
  var newObject={ [items]:itemPrice };
  Object.assign(cart, newObject);
  console.log(`${items} has been added to your cart.`);
  return cart;
}
