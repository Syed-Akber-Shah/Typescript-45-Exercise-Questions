
// Question no. 24. MORE CONDITIONAL TESTS. You dont have to limit the number of tests you create to 10. If you 
// try more comparisons, write more tests. Have atleast one True and one false result for each of the following

// . Tests for equality and inequality with strings.
// . Test using the lower case function.
// . Numerical tests involving equality and inequality , greater than and less than, greater than or equal to

// . Tests using "and" and "or" operators.
// . Test whether an item is in a array.
// . Test whether an item is not in a array


let myName: string = "Syed Akber Shah"
let my_Age: number = 22
let random_numbers: number [] = [2,4,6,8]
// Q24 p1
console.log(myName == "Syed Akber Shah")
console.log(myName != "Syed Akber Shah" )

// Q24 p2
console.log(myName.toLowerCase == myName.toUpperCase)
console.log(myName.toLowerCase == myName.toLowerCase)

//Q24 p3
console.log(my_Age == 22)    //true
console.log(my_Age != 22)    //false
console.log(my_Age < 22)    //false
console.log(my_Age > 22)    //false
console.log(my_Age <= 22)    //true
console.log(my_Age >= 22)    //true

//Q24 p4 
//("And && operator jab donu side py true statement hogi tab true print krega aur agar kisi bhi ek bi side pe false statement hogi to false answer print hoga.")
//("Or || operator jab donu sides py false statement hogi tab false print krega otherwise agr kisi 1 bhi side py true statement hui to true answer print hoga.")


console.log(my_Age > 18 && my_Age < 25)    //true
console.log(my_Age > 18 && my_Age < 22)    //false

console.log(my_Age == 22 || my_Age ==20 )    //true
console.log(my_Age == 14 || my_Age == 12)    //false

//Q24 p5
//let randomThings: string [] = ["camel","karachi","uae"];
//console.log(randomThings[] == "islamabad")
//console.log(randomThings[] == "karachi")

//Q24 p5
console.log(10 in random_numbers)   //false
console.log(2 in random_numbers)    //true





