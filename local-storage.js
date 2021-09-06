const inputField = document.getElementById("products");
const ulContainer = document.getElementById("items");
const clearProduct = document.getElementById("clear-p");
const loadDataFromLocalStorage = () => {
  const cart = getCart();
  for (const item in cart) {
    displayProduct(item);
  }
};
const addItem = () => {
  const name = inputField.value;
  if (!name) {
    return;
  }
  // display in the UI
  displayProduct(name);
  //   add to local storage
  addProductTOCart(name);
  inputField.value = "";
};

const displayProduct = (name) => {
  const li = document.createElement("li");
  li.innerHTML = `${name}`;
  ulContainer.appendChild(li);
};

const getCart = (cart) => {
  const Cart = localStorage.getItem("cart");
  let cartObj;
  if (Cart) {
    cartObj = JSON.parse(Cart);
  } else {
    cartObj = {};
  }
  return cartObj;
};
const addProductTOCart = (name) => {
  const cart = getCart();
  if (cart[name]) {
    cart[name] += 1;
  } else {
    cart[name] = 1;
  }
  let cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};
const placeOrder = () => {
  ulContainer.textContent = "";
  localStorage.removeItem("cart");
};
loadDataFromLocalStorage();
