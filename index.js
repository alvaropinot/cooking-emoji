const {eat, cook, isVegetarian} = require('./lib');

['🍿', '🍳'].reduce(eat);
// => 💩

['🌽', '🐮', '🐔'].map(cook);
// => [🍿, 🍔, 🍳]

['🍿', '🍔', '🍳'].filter(isVegetarian);
// => [🍿, 🍳]

/**
 * Original tweet
 * @author Steven Luscher
 * @see https://twitter.com/steveluscher/status/741089564329054208
 *
 * map([🌽, 🐮, 🐔], cook)
 * // => [🍿, 🍔, 🍳]
 *
 * filter([🍿, 🍔, 🍳], isVegetarian)
 * // => [🍿, 🍳]
 *
 * reduce([🍿, 🍳], eat)
 * // => 💩
 */
