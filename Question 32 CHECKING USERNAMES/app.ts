// QUESTION 32 
//CHECKING USERNAMES.
// Do the following to create a program that simulates how
// websites ensures that everyone has a unique username.
// p1. Make a list of five or more more usernames called current users.
//p2. Make another list of five usernames called new users. Make sure one or two
 // of the usernames are also in the current users list.
 //p3. Loop through the new users list to see if each new usernamehas already been used. if 
 // it has, print a message that the person will need to enter a new username.If a
 // usernamehas not been used, print a message sayingthat thhe username is available.
 //Make sure your comparison is case insensitive. If John has used, 'JOHN should
 // not be accepted.

 let current_users: string [] = ["Ali","Ahmed","Raheel","Shoban","Kamran"]
let new_users = ["Sana","Ali","Iqra","Ahmed","Raza"]


// Question Requirement method
new_users.forEach((newUser) => {
    if (
        current_users.some(
            (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
        )
     ) {
            console.log(`${newUser} will need to enter a new username.`)
        }
     else {
console.log(`${newUser} is available`);

    }
});


// other simple method
// if(new_users.includes(current_users[4])){
// console.log("The person will need to enter a new username")
// }
// else{
//     console.log("The username is available.")
// }
