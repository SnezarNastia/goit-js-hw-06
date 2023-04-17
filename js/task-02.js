const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector("#ingredients");

const ingredientItems = ingredients.map((ingredient) => {
  const ingredientEL = document.createElement("li");
  ingredientEL.textContent = ingredient;
  ingredientEL.classList.add("item");

  return ingredientEL;
});

ingredientList.append(...ingredientItems);
