// Question 42 GREAT MAGICIANS.
var magicianNames = ["George", "Lee", "Sam"];
function make_great() {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var magician = magicianNames_1[_i];
        console.log("the great ".concat(magician));
    }
}
make_great();
function show_magicians2() {
    for (var i = 0; i < magicianNames.length; i++)
        console.log("the great ".concat(magicianNames[i]));
}
show_magicians2();
