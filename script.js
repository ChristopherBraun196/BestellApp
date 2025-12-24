function init() {
  document.getElementById("burgerList").innerHTML = loadBurger(myDishesBurger);
  document.getElementById("pizzaList").innerHTML = loadPizza(myDishesPizza);
  document.getElementById("saladList").innerHTML = loadSalad(myDishesSalad);
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
