const readlineSync = require("readline-sync");

let name = readlineSync.question("What is your name?\n");
let firstName = readlineSync.question("What is your first name?\n");
let city = readlineSync.question("Where do you live?\n"); 

console.log("Your name is " + firstName + " " + name + " and you live in " + city);
