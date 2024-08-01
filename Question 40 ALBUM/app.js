"use strict";
// Question 40 ALBUM 
// isko console.log ki jagah funtion call krwa k bhi check krna hai mujy aj InshaALLAH.
function make_album(artistName, albumTitle) {
    return { artistName, albumTitle };
}
let album1 = make_album("Atif Aslam", "Tu hi");
let album2 = make_album("Nusrat Fateh Ali Khan", "Mere Rashk e Qamar");
let album3 = make_album("Ali Zafar", "Larshe Pekhawar");
console.log(album1);
console.log(album2);
console.log(album3);
function make_album2(artistName, albumTitle, tracks) {
    return { artistName, albumTitle, tracks };
}
let album4 = make_album2("Atif Aslam", "Tu hi", 10);
let album5 = make_album2("Nusrat Fateh Ali Khan", "Mere Rashk e Qamar", 23);
let album6 = make_album2("Ali Zafar", "Larshe Pekhawar");
console.log(album4);
console.log(album5);
console.log(album6);
