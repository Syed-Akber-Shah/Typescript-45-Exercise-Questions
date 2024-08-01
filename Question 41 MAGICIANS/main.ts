let magicianNames: string [] = ["George","Lee","Sam"]

function show_magicians() {
    for (let magician of magicianNames) 
        console.log(magician)
}

show_magicians();

function show_magicians2() {
    for (let i = 0; i < magicianNames.length; i++)
        console.log(magicianNames[i])
}

show_magicians2();