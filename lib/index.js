const eat = (previousValue, food) => {
  if (food) {
    // nom nom nom
    previousValue += '💩';
  }
  return previousValue;
};

const _recipes = {
  '🌽': '🍿',
  '🐮': '🍔',
  '🐔': '🍳'
};

const recipeBook = recipes => food => recipes[food] || food;

const cook = recipeBook(_recipes);

const isVegetarian = food => ['🍿', '🍳'].indexOf(food) !== -1;

module.exports = {
  cook,
  isVegetarian,
  eat,
  recipeBook
};
