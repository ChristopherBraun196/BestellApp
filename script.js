const STORAGE_KEY_BASKET = "burgerhouse_basket";

let basketList = [];

function init() {
  loadBasketFromLocalStorage();
  document.getElementById("burgerList").innerHTML = loadBurger(myDishesBurger);
  document.getElementById("pizzaList").innerHTML = loadPizza(myDishesPizza);
  document.getElementById("saladList").innerHTML = loadSalad(myDishesSalad);
  renderBasket();
}

function loadBurger(myDishesBurger) {
  let html = "";

  for (let i = 0; i < myDishesBurger.length; i++) {
    const dish = myDishesBurger[i];

    html += DishCardTemplate(dish);
  }

  return html;
}

function loadPizza(myDishesPizza) {
  let html = "";

  for (let i = 0; i < myDishesPizza.length; i++) {
    const dish = myDishesPizza[i];

    html += DishCardTemplate(dish);
  }

  return html;
}

function loadSalad(myDishesSalad) {
  let html = "";

  for (let i = 0; i < myDishesSalad.length; i++) {
    const dish = myDishesSalad[i];

    html += DishCardTemplate(dish);
  }

  return html;
}

function openMenu() {
  let overlay = document.getElementById("openMenu");

  overlay.classList.toggle("d-block");
}

// Basket

function renderBasket() {
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

    html += myMealTemplate(basketItem, itemTotal);
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

function saveBasketToLocalStorage() {
  localStorage.setItem(STORAGE_KEY_BASKET, JSON.stringify(basketList));
}

function loadBasketFromLocalStorage() {
  const stored = localStorage.getItem(STORAGE_KEY_BASKET);

  if (!stored)   
  
    return;

    basketList = JSON.parse(stored);
}

