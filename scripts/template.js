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
          <div class="dish-price">${dish.price.toFixed(2)} €</div>       
      </div>
    </div>
  `;
}
