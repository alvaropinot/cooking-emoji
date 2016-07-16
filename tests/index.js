const test = require('tape');

const {eat, cook, isVegetarian, recipeBook} = require('../lib');

test('should be able to eat', t => {
  const actual = ['🍿', '🍳'].reduce(eat);
  const expected = '💩';

  t.equal(actual, expected, 'should produce 💩');
  t.end();
});

test('should be able to cook', t => {
  const actual = ['🌽', '🐮', '🐔'].map(cook);
  const expected = ['🍿', '🍔', '🍳'];

  t.deepEqual(actual, expected, 'should produce new food');
  t.end();
});

test('should be able to filter vegetarian food', t => {
  const actual = ['🍿', '🍔', '🍳'].filter(isVegetarian);
  const expected = ['🍿', '🍳'];

  t.deepEqual(actual, expected, 'should remove 🍔');
  t.end();
});

test('should be able to create new recipes book', t => {
  const recipes = {
    '🍓': '🍧',
    '🍋': '🍨'
  };
  const cook = recipeBook(recipes);
  const actual = ['🍓', '🍋'].map(cook);
  const expected = ['🍧', '🍨'];

  t.deepEqual(actual, expected, 'should produce some 🍦');
  t.end();
});
