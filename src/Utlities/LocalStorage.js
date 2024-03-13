const storedCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  } else {
    return [];
  }
};

const addToLocalStorage = (id) => {
  const cart = storedCart();
  cart.push(id);
  saveCartToLocalStorage(cart);
};
const saveCartToLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const removeFromLocalStorage = (id) => {
  const cart = storedCart();
  const remaining = cart.filter((idx) => idx !== id);
  saveCartToLocalStorage(remaining);
};
export { addToLocalStorage, storedCart, removeFromLocalStorage }
