const STORAGE_KEY_BASKET = "burgerhouse_basket";

let basketList = [];
let deliveryPrice = 5.0;

function init() {
  loadBasketFromLocalStorage();

  loadDishes(myDishesBurger, 'burgerList');
  loadDishes(myDishesPizza, 'pizzaList');
  loadDishes(myDishesSalad, 'saladList');

  renderBasket();
}

function loadDishes(myDishesBurger, containerID) {
  let burgerList = document.getElementById(containerID);
  burgerList.innerHTML = "";

  for (let i = 0; i < myDishesBurger.length; i++) {
    const dish = myDishesBurger[i];
    burgerList.innerHTML += DishCardTemplate(dish);
  }
}

function openMenu() {
  let overlay = document.getElementById("openMenu");

  overlay.classList.toggle("isHidden");
}



function renderBasket() {     // Render "Your Basket"
  document.getElementById("myMealList").innerHTML = loadBasket(basketList);
  renderBasketTotal();
}

function addToBasket(dishID) {
  dishID = Number(dishID);
  const dish =
    myDishesBurger.find((d) => d.id === dishID) ||
    myDishesPizza.find((d) => d.id === dishID) ||
    myDishesSalad.find((d) => d.id === dishID);

  if (!dish) return;

  const existing = basketList.find((item) => item.id === dishID);

  if (existing) {
    existing.quantity += 1;
  } else {
    basketList.push({ ...dish, quantity: 1 });
  }
  saveBasketToLocalStorage();
  renderBasket();
}

function loadBasket(list) {
  let html = "";

  for (let i = 0; i < list.length; i++) {
    const basketItem = list[i];
    const itemTotal = basketItem.price * basketItem.quantity;

    html += myMealTemplate(basketItem, itemTotal, i);
  }

  return html;
}

function basketTotal() {
  let subtotal = 0;

  for (let i = 0; i < basketList.length; i++) {
    const item = basketList[i];
    subtotal += item.price * item.quantity;
  }

  return subtotal + deliveryPrice;
}

function renderBasketTotal() {
  const total = basketTotal();
  document.getElementById("basketTotal").innerHTML = myTotalPrice(total);
}

function buyNow() {
  if (basketList.length === 0) {
    return;
  }

  clearBasket();
  showOrderSuccess();
}

function clearBasket() {
  basketList = [];
  localStorage.removeItem("burgerhouse_basket");
  renderBasket();
}

function closeOrderDialog() {
  document.getElementById("orderDialog").classList.add("d-none");
}

function deleteBasket(index) {
  const item = basketList[index];

  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    basketList.splice(index, 1);
  }

  saveBasketToLocalStorage();
  renderBasket();
}

function deleteBasketAll(index) {
  basketList.splice(index, 1);

  saveBasketToLocalStorage();
  renderBasket();
}

function showOrderSuccess() {
  const dialog = document.getElementById("orderDialog");

  dialog.innerHTML = orderSuccessTemplate();
  dialog.classList.remove("d-none");
}

function saveBasketToLocalStorage() {
  localStorage.setItem("burgerhouse_basket", JSON.stringify(basketList));
}

function loadBasketFromLocalStorage() {
  const stored = localStorage.getItem("burgerhouse_basket");
  if (!stored) return;
  basketList = JSON.parse(stored);
}
