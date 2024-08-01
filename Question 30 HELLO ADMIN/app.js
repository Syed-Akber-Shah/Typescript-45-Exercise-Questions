"use strict";
// QUESTION 30 HELLO ADMIN
// Make a array of of five or more usernames, including the name 'admin'. Imagine you're writing code that will print a greeting
// to each user after they log into a website. Loop through the array, and print a greeting to each user:
//p1. if the username is 'admin' , print a special greeting, such as Hello admin, would you like to see a status report?
//p2. Otherwise, print a generic greeting, such as Hello Eric, thank you forlogging in again.
let users = ['Azhar', 'Ali', 'Eric', 'Admin', 'Shakeel'];
for (let user of users) {
    if (user == 'Admin') {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user} thank you for logging in again.`);
    }
}
