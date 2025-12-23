function DishCardTemplate(dish) {
  return `
    <div class="dishes-card">
      <h3>${dish.name}</h3>
      <p>${dish.description}</p>
      <div class="price">${dish.price.toFixed(2)} €</div>
    </div>
  `;
}
