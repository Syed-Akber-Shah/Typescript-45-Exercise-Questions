var magicianNames = ["George", "Lee", "Sam"];
function show_magicians() {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var magician = magicianNames_1[_i];
        console.log(magician);
    }
}
show_magicians();
function show_magicians2() {
    for (var i = 0; i < magicianNames.length; i++)
        console.log(magicianNames[i]);
}
show_magicians2();
