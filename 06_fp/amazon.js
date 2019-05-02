// Amazon shopping
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}


// Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart ==> purchases
// 4. Empty card

// Bonus:
// accept refunds
// track user history

const item1 = {
  name: 'Albino Sun Screen',
  price: 28.28
}

const item2 = {
  name: 'Alegator Floss',
  price: 19.99
}

function addToCart(user, item) {
  const newItem = { ...item, price: item.price + item.price*.03 }
  return { 
    ... user, 
    cart: [...user.cart, newItem] 
  }
}

function purchaseItems(user) {
  return {
    ... user,
    cart: [],
    purchases: [...user.cart]
  }
}


const cart1 = addToCart(user, item1);
const cart2 = addToCart(cart1, item2)
console.log(cart2);
const bought = purchaseItems(cart2);
console.log(bought);
