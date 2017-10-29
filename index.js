
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
