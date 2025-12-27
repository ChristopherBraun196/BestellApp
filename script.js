let basketList = [];

function init() {
  document.getElementById("burgerList").innerHTML = loadBurger(myDishesBurger);
  document.getElementById("pizzaList").innerHTML = loadPizza(myDishesPizza);
  document.getElementById("saladList").innerHTML = loadSalad(myDishesSalad);
  renderBasket();
}

function renderBasket() {
  document.getElementById("myMealList").innerHTML =
    loadBasket(basketList);

  document.getElementById("basketTotal").innerHTML =
    `<strong>Gesamt: ${getBasketTotal().toFixed(2)} €</strong>`;
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

function addToBasket(dishID) {
  const dish =
    myDishesBurger.find((d) => d.id === dishID) ||
    myDishesPizza.find((d) => d.id === dishID) ||
    myDishesSalad.find((d) => d.id === dishID);

  if (dish) {
    basketList.push(dish);
    renderBasket();
  }
}

function loadBasket(basketList) {
  let html = "";

  for (let i = 0; i < basketList.length; i++) {
    const basketItem = basketList[i];
    html += myMealTemplate(basketItem);
  }

  return html;
}

function getBasketTotal(){
  return basketList.reduce((sum, item)=>{
    return sum + item.price * item.quantity;
  }, 0);
}