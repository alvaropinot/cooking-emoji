# Cooking emoji
No dependencies emoji cooking 🍻.

Once I've read [this tweet](https://twitter.com/steveluscher/status/741089564329054208)
from @steveluscher I could not help my self not to write this repo 😈 obviously
with his own tests 😂

It's something like:

```js
map([🌽, 🐮, 🐔], cook)
// => [🍿, 🍔, 🍳]

filter([🍿, 🍔, 🍳], isVegetarian)
// =>  [🍿, 🍳]

reduce([🍿, 🍳], eat)
// => 💩
```


## Usage

```
git clone https://github.com/alvaropinot/cooking-emoji
npm install
npm test
```

## Create your own recipes!

### like some ice creams!

```js
const recipes = {
  '🍓': '🍧',
  '🍋': '🍨'
};

const cook = recipeBook(recipes);
['🍓', '🍋'].map(cook);
// => ['🍧', '🍨']
```

## Implementation
implementation details are inside the `lib` 🗂.
