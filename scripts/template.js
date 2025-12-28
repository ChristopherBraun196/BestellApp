function DishCardTemplate(dish) {
  return `
    <div class="dishes-card">
      <div class="dish-img-wrap">
        <img class="dish-cover" src="${dish.image}" alt="Cover von ${
    dish.name
  }">
      </div>

      <div class="dish-info">
        <div class="dish-head">
          <h3 class="dish-name">${dish.name}</h3>
          <p class="dish-desc">${dish.description}</p>
        </div>

        <div class="dish-actions">
          <div class="dish-price">${dish.price.toFixed(2)} €</div>
          <button onclick="addToBasket(${
            dish.id
          })" class="dish-added" aria-label="Add to basket">
            <img src="./assets/icons/AddBasket.svg" alt="">
          </button>
        </div>
      </div>
    </div>
  `;
}

function myMealTemplate(basketItem, itemTotal, index) {
  return `
    <div class="meal-list">
      <span class="number">${basketItem.quantity}x</span>

      <span class="meal-name">${basketItem.name}</span>

      <div class="meal-actions">
        <span class="meal-price">
          (${basketItem.price.toFixed(2)}€) ${itemTotal.toFixed(2)} €
        </span>

        <img
          src="./assets/icons/delete.svg"
          alt="Artikel löschen"
          class="delete-icon"
          onclick="deleteBasket(${index})"
        />
      </div>
    </div>
  `;
}

function myTotalPrice(total) {
  return `
    <section class="basketTotal"> 
      <div>
        <strong>Liefergebühr:   </strong> ${deliveryPrice.toFixed(2)}€ 
      </div>
      <div>
        <strong>Gesamtpreis:</strong> ${total.toFixed(2)}€
      </div>
    </section>    
    `;
}

function orderSuccessTemplate() {
  return `
    <div class="order-dialog-content">
      <img
        class="confirm"
        src="./assets/img/Confirmation.svg"
        alt="Bestellung erfolgreich"
      >
      <button class="buyButton" onclick="closeOrderDialog()">
        Schließen
      </button>
    </div>
  `;
}