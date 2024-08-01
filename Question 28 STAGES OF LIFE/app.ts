// Question no. 28 STAGES OF LIFE.
// Stages of life: Write an if-else chain that determines a person's stage of life. Set a value for the variable age, and then:

// if the person is less than 2 years old, print a message that the person is a baby.

// if the person is atleast 2 years old but less than 4, print a message that the person is a toddler.

// if the person is atleast 4 years old but less than but less tha 13 , print a message that the person is a kid.

// if the person is atleast 13 years old but less than 20, print a message that the person is a teenager.

//if the person is atleast 20 years old but less than 65, print the message that the person is adult.

// if the person is atleast 65 or older, print a message that the person is an elder.


let age: number = 30;

// part no.1
if(age <2){
    console.log("the person is baby.")
}

// part no.2
else if(age >=2 && age <4){
    console.log("the person is a toddler.")
}

// part no.3
else if(age >=4 && age <13){
    console.log("the person is a kid.")
}

// part no.4
else if(age >=13 && age <20){
    console.log("the person is a teenager.")
}

// part no.5
else if(age >=20 && age <65){
    console.log("the person is an adult.")
}

// part no.6
else{
    console.log("the person is an elder.")
}