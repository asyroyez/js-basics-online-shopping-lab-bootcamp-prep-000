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
  }

  console.log(`In your cart, you have ${itemsAndPrices}`);
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
