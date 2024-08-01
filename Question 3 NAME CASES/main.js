"use strict";
// Question 3. NAME CASES. Store a person's name in a variable, and then print that person's name in lowercase, uppercase, and titlecase.
let personsName = "Syed Akber Shah";
// lowercase.
let LowerCasedName = personsName.toLowerCase();
console.log(LowerCasedName);
// uppercase.
let UpperCasedName = personsName.toUpperCase();
console.log(UpperCasedName);
// titlecase.
// step 1.
let words = personsName.split(" ");
console.log(words);
// words naam ka array bna liya aur us mein personName.split kr ke
// words array mein Syed Akber Shah 3 alag alg values bn gyi ye split k kaam h
// title case mein is lie arha h qk personsName ki value jo mn ny likhi h wo title case mein h isko title case mein print krwana baki h abi.
// aur empty string mein space diya h to array mein vslues mein b space h.
//step2.
let titlecasedName = "";
//step3.
for (let i = 0; i < words.length; i++) {
    titlecasedName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
// for loop chlaya hum ne pehly b use kiya h aur loop h to chlta rhega jb tk condition break nh hogi.
// let i(index) = 0 kiya phr i < words.length kiya yani i chota words k purey array se ghen i++ ye hum ko use krna ata h tarika.
// curly bracket k andar assignment operator += k zarye words add kiya phir uska index btaya words[i],
// phr .charAt ka use kiya ye ek method h char ka mtlb character ye basically character selection krta h .charAt(0) index 0 diya words k array mein 3 values hain Syed Akber Shah yahan hum 0 index yani 3no values ki 1st character yani S A S ka bta rhy hain.
// phr .uppercase() lga diya means S A S ko uppercase mei krdo. phr + kr k words[i] kiya phr .slice(1) slice original array ko copy kr k copy ko slice krta h yani katta h aur yahan index 1 diya h taky y and so on k and so on h and so on
// .lowercase() krdiya S A S k baad waly aphabets lowercase mein chahye hain + lga " " lga diya qk hum ko b space b chahye.
console.log(titlecasedName);
