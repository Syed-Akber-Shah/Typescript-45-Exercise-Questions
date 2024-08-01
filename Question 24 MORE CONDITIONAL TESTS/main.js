var myName = "Syed Akber Shah";
var my_Age = 22;
var random_numbers = [2, 4, 6, 8];
// Q24 p1
console.log(myName == "Syed Akber Shah");
console.log(myName != "Syed Akber Shah");
// Q24 p2
console.log(myName.toLowerCase == myName.toUpperCase);
console.log(myName.toLowerCase == myName.toLowerCase);
//Q24 p3
console.log(my_Age == 22); //true
console.log(my_Age != 22); //false
console.log(my_Age < 22); //false
console.log(my_Age > 22); //false
console.log(my_Age <= 22); //true
console.log(my_Age >= 22); //true
//Q24 p4 
//("And && operator jab donu side py true statement hogi tab true print krega aur agar kisi bhi ek bi side pe false statement hogi to false answer print hoga.")
//("Or || operator jab donu sides py false statement hogi tab false print krega otherwise agr kisi 1 bhi side py true statement hui to true answer print hoga.")
console.log(my_Age > 18 && my_Age < 25); //true
console.log(my_Age > 18 && my_Age < 22); //false
console.log(my_Age == 22 || my_Age == 20); //true
console.log(my_Age == 14 || my_Age == 12); //false
//Q24 p5
//let randomThings: string [] = ["camel","karachi","uae"];
//console.log(randomThings[] == "islamabad")
//console.log(randomThings[] == "karachi")
//Q24 p5
console.log(10 in random_numbers); //false
console.log(2 in random_numbers); //true
