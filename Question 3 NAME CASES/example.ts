// example of split



let sentence: string = "this is a split example"
let words1: string [] = sentence.split("")

console.log(words1);

// example of slice
const str : string = "Hello, World";
const sliced:string = str.slice(0,8)
// slice original array ya variable ko copy kr k us mein se required part cut ya extract kr ek new variable ya array bna k show krdeta h yahan b yahi hua.
// .slice lga k hum ny us ko range dedink yhan se yhan tk kam krna h 0,8 to 0 index py H hai aur 7 py W hai to us ne Hello, W de diya is mein wo range k 2nd lat element tk extract krega. 0,8 diya to 7 tk print kiya.

console.log(sliced);

//example of charAt

let str1: string = "Hello World"
let charAtIndex: string = str1.charAt(3)
console.log(charAtIndex);

// charAt ka mtlb hota h character selection. aur hum ny (3) diya means index no.3
// to ab ye index no 3. yani l ko pkr lega aur console de dega.

