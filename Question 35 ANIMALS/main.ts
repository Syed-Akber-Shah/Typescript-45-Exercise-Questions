// Question 35 ANIMALS

// METHOD 1. USING FOR LOOP AND DIVIDING ARRAY  favoritePizzas to variable(sub array) pizza.

let myPets: string [] = ["Cat","Dog","Cow"];

for(let pet of myPets){
    console.log(pet)
}

for (let pet of myPets){
    console.log(`A ${pet} would make a great pet.`)
}

console.log(`\nAny of these animals would make a great pet!`)

// METHOD 2. USING FOR LOOP AND INDEX AND INCRIMENT.

for(let i = 0; i < myPets.length; i++){
    console.log(myPets[i])
}

for(let i = 0; i < myPets.length; i++){
    console.log(`A ${myPets[i]} would make a great pet.`)
}

console.log(`\nAny of these animals would make a great pet!`)


