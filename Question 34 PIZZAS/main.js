"use strict";
// Question 34 PIZZAS
// METHOD 1. USING FOR LOOP AND DIVIDING ARRAY  favoritePizzas to variable(sub array) pizza.
let favoritePizzas = ["BBQ Pizza", "Veg Pizza", "Peporoni Pizza"];
for (let pizza of favoritePizzas) {
    console.log(pizza);
}
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza}`);
}
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} very much.`);
}
console.log(`\n I really love pizza!`);
// METHOD 2. USING FOR LOOP AND INDEX AND INCRIMENT.
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(`I like ${favoritePizzas[i]}.`);
}
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(`I like ${favoritePizzas[i]} very much.`);
}
console.log(`I really love Pizza!`);
