// Question 42 GREAT MAGICIANS.

let magicianNames: string [] = ["George","Lee","Sam"]

function make_great() {
    for (let magician of magicianNames)
console.log(`the great ${magician}`)
}

make_great();

function show_magicians2() {
    for (let i = 0; i < magicianNames.length; i++)
        console.log(`the great ${magicianNames[i]}`)
}

show_magicians2();


