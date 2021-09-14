const readlineSync = require("readline-sync");


let userAge = readlineSync.question("How old are you?: ");

let majorityAge = 18;

if (userAge >= majorityAge){
    console.log("You are an adult");
}else{
    console.log("You are not yet an adult");
}
