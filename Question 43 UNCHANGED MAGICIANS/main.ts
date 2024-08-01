// Question 43 UNCHANGED MAGICIANS
// Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magician's names. Because the original array will be unchanged, return the new array and store it in a seperate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician's name.
// knowledge and learning yt channel ki video se kiya hai samjh b kuch nh aya aur errors b hain aur yahi same to same errors us ke b thy video mein.

let magicianNames: string [] = ["George","Lee","Sam"]

function make_great(magicianNames:string[]): string[] {
let greatMagicians : string[]= [];
magicianNames.forEach(magicianName => {
    greatMagicians.push(`${magicianName} the great`);
});
return greatMagicians;
}

let greatMagicians = make_great(magicianNames.slice()); //Creates a new modified array
console.log("Original magicians: " + make_great(magicianNames)); // shows original names
// make_great(magicianNames); // shows original names
console.log("Great Magicians: " + make_great(greatMagicians)); // Shows modified names
// make_great(greatMagicians); // Shows modified names





