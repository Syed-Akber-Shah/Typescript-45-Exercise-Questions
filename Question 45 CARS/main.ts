// QUESTION 45 CARS.
// Write a function that stores information about a car in a object. The function should always recieve a manufacturer
// and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required
// information and two other name-value pairs, such as a color or an optional feature. Print the Object that's returned
// to make sure all the information was stored correctly.

 function cars(manufacturer: string, model:string, ...options: [string, any][]):Object {
    let car = {manufacturer,model}
    options.forEach(([key,value]) => car[key] = value);
    return car;
 }

 console.log(cars("Toyota","Vigo", ["color","red"],["year","2024"]));
 console.log(cars("Honda","Civic", ["color","blue"],["sunroof",123]));

 // knowledge and learning yt channel se kra h. samjh b nh aya h aur error b h line no 9 mein.
 // isko dobara samjhna h aur krna h lazmi.
 
 