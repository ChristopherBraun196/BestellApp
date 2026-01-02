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
      <div class="meal-top">
        <div class="meal-title">
          <span class="qty">${basketItem.quantity}x</span>
          <span class="meal-name">${basketItem.name}</span>
        </div>

        <div class="meal-price">(${basketItem.price.toFixed(
          2
        )}€) ${itemTotal.toFixed(2)} €</div>
      </div>

      <div class="meal-bottom">
        <div class="meal-controls">
         <img
            src="./assets/icons/+.svg"
            alt="Eins hinzufügen"
            class="add-icon"
            onclick="addToBasket(${basketItem.id})"
          />
          <img
            src="./assets/icons/-.svg"
            alt="Eins entfernen"
            class="delete-icon"
            onclick="deleteBasket(${index})"
          /> 
              <img
            src="./assets/icons/delete.svg"
            alt="Eins entfernen"
            class="trash-icon"
            onclick="deleteBasketAll(${index})"
          /> 
        </div>
      </div>
    </div>
  `;
}

function myTotalPrice(total) {
  return `
    <section class="basketPrice"> 
    <hr>
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
      <a onclick="closeOrderDialog()">
          <img class="order-dialog-content-delete"src="./assets/img/close-button.png" alt="close-button">
        </a>
       <img class="carImage" src="./assets/img/carImage.png">
      <h5> Order confirmed!</h5>
      <span>Your food is on the way!</span>
      
     
    </div>
  `;
}
