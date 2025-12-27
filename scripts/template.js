function DishCardTemplate(dish) {
  return `
    <div class="dishes-card">
      <div class="dish-img-wrap">
        <img class="dish-cover" src="${dish.image}" alt="Cover von ${dish.name}">
      </div>

      <div class="dish-info">
        <div class="dish-head">
          <h3 class="dish-name">${dish.name}</h3>
          <p class="dish-desc">${dish.description}</p>
        </div>

        <div class="dish-actions">
          <div class="dish-price">${dish.price.toFixed(2)} €</div>
          <button onclick="addToBasket(${dish.id})" class="dish-added" aria-label="Add to basket">
            <img src="./assets/icons/buttonAddtoBasket.svg" alt="">
          </button>
        </div>
      </div>
    </div>
  `;
}

function myMealTemplate(basketItem){
  const itemTotal = basketItem.price * basketItem.quantity;

  return`
   <div class=" meal-list" >
      <p> ${basketItem.quantity}x <p>
      <h5>${basketItem.name}</h5>
      <span>${basketItem.price.toFixed(2)} €</span>
     </div>
     
    `;
}
