var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100) + 1;

  cart.push({[item]: price});

  console.log(`${item} has been added to your cart.`);

  return cart;
}

function viewCart() {
  const length = cart.length;

  if (!length) {
    return console.log("Your shopping cart is empty.");
  }

  let itemsAndPrices = [];

  for (var i = 0; i < length; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    itemsAndPrices.push(`${item} at $${price}`);
  }

  switch (itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(" and ");
      break;
    default:
     itemsAndPrices[length-1] = "and ".concat(itemsAndPrices[length-1]);
     itemsAndPrices = itemsAndPrices.join(", ");
  }

  console.log(`In your cart, you have ${itemsAndPrices}.`);
}

function total() {
  let total = 0;

  for (let i = 0, length = cart.length; i < length; i++) {
    for (let item in cart[i]) {
      total += cart[i][item];
    }
  }
  return total;
}

function removeFromCart(item) {
  let itemInCart = false;

  for (let i = 0, length = cart.length; i < length; i++) {
    array[i]
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
