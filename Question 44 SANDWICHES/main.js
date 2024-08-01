"use strict";
// QUESTION 44 SANDWICHES
// Write a function that accepts a array of items a person wants on a sandwich.
//The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//using a different number of arguments each time.
function make_sandwich(...ingridients) {
    console.log(`Making a sandwich with ${ingridients.join(', ')}.`);
}
make_sandwich("Breads");
make_sandwich("Mayo", "Ketchup");
make_sandwich("Breads", "kabab", "Mayo", "Ketchup");
