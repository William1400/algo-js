const readlineSync = require("readline-sync");


let numberOfQuestions = 5; 

console.log("rest: " + numberOfQuestions);
numberOfQuestions --;
let quest1 = readlineSync.question("What is your First Name?: \n"); // King
    
console.log("rest: " + numberOfQuestions);
numberOfQuestions --;
let quest2 = readlineSync.question("What is your Name?: \n"); // Hartur
    
console.log("rest: " + numberOfQuestions);
numberOfQuestions --;
let quest3 = readlineSync.question("What is your year of birth?: \n"); //1756
       
console.log("rest: " + numberOfQuestions);
numberOfQuestions --;
let quest4 = readlineSync.question("Where do you come from?: \n"); //England
    
console.log("rest: " + numberOfQuestions);
numberOfQuestions --;
let quest5 = readlineSync.question("Where do you live?: \n"); // In the sky

console.log("Hey how are you? my name is " + quest1 + " " + quest2 + " I live in " + quest5 + " I was boorn in " + quest3 + " Icome from " + quest4);

 






 