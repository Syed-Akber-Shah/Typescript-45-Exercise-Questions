// Q32. Checking Usernames do the following to create a program that simulates how
// websites ensures that everyone has a unique username.
// p1. Make a list of five or more more usernames called current users.
//p2. Make another list of five usernames called new users. Make sure one or two
 // of the usernames are also in the current users list.
 //p3. Loop through the new users list to see if each new usernamehas already been used. if 
 // it has, print a message that the person will need to enter a new username.If a
 // usernamehas not been used, print a message sayingthat thhe username is available.
 //Make sure yourcomparison is case insensitive. If John has used, 'JOHN should
 // not be accepted.

let current_users : string [] = ["Saba","Admin","Babar","Ahmed","Raza"]

let new_users : string [] = ["Admin","Fawwad","Hussain","User7","User9"]

let current_users_lower : string [] = current_users.map(user => user.toLowerCase())

for (let newUser of new_users){
    if {current_users_lower.includes}
}

//mehak alamgir incomple smjh nh aya