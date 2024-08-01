"use strict";
// Question 17. SHRINKING GUEST LIST. You just found out that your new dinner table won't arrive in time for the dinner,
// and you have space for only two guests.
// . Start with your program from Exercise 16. Add a new line that prints a message sving that youc can invite only only two people for dinner.
// . Remove guests from your list one at a time until only two names remain in your list. print a message to that person letting them
// know you are sorry you can't invite them to dinner.
// . Print a message to each of the two people still on your list, letting them know you're sorry you can't invite them to dinner.
// .Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestList = void 0;
let GuestList = ["Muhammad", "Ali", "Asghar"];
exports.GuestList = GuestList;
console.log(`hi ${GuestList[1]} please join us at 9 pm for dinner.`);
console.log(`hi my friend ${GuestList[2]} i m inviting you to dinner at my home`);
console.log(`hi ${GuestList[0]} please come to my place for dinner tonight.`);
console.log(`unfortunately, ${GuestList[1]} and ${GuestList[2]} can't coming today`);
// old list of guests.. "Muhammad", "Ali", "Asghar"
// modifying GuestList...
exports.GuestList = GuestList = ["Muhammad", "Hanzala", "Abbas"];
console.log(`hi my friend ${GuestList[0]} please join us at 9 pm for dinner.`);
console.log(`hi ${GuestList[1]} i m inviting you to dinner at my home`);
console.log(`hi ${GuestList[2]} please come to my place for dinner tonight.`);
console.log("Hi friends i want to inform you that i found a bigger table.");
// modifying GuestList...
// adding name "Hussain" in the beginnig of list, "Baqir" in middle part and "Usman" in  the ending part
exports.GuestList = GuestList = ["Hussain", "Muhammad", "baqir", "hanzala", "abbas", "Usman"];
console.log(`hi my friend ${GuestList[0]} please join us at 9 pm for dinner.`);
console.log(`hi ${GuestList[1]} i m inviting you to dinner at my home.`);
console.log(`hi ${GuestList[2]} please come to my place for dinner tonight.`);
console.log(`hi my friend ${GuestList[3]} please join us at 9 pm for dinner.`);
console.log(`hi ${GuestList[4]} i m inviting you to dinner at my home`);
console.log(`hi ${GuestList[5]} please come to my place for dinner tonight.`);
console.log("Sorry Guys, i can invite only 2 persons.");
console.log(`i m sorry ${GuestList[3]} i cant invite you to dinner.`);
console.log(`i m sorry ${GuestList[0]} i cant invite you to dinner.`);
console.log(`i m sorry ${GuestList[3]} i cant invite you to dinner.`);
console.log(`i m sorry ${GuestList[5]} i cant invite you to dinner.`);
exports.GuestList = GuestList = ["Muhammad", "Abbas"];
console.log(`hi ${GuestList[0]} you are still invited.`);
console.log(`hey ${GuestList[1]} you are still invited.`);
exports.GuestList = GuestList = ["Hassan", "Mujtaba", "Hammad", "Hamid"];
console.log(GuestList);
