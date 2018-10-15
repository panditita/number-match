var text = ['two', 'six', 'four', 'one', 'three'];
var digits = [2, 6, 4, 1, 3]
var match = {};

text.forEach((letter, i) => match[letter] = digits[i]);
console.log(match);