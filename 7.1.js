const readlineSync = require("readline-sync");

let guess =parseInt(readlineSync.question("Take a guess: 80"));

let i = Math.floor(Math.random() * 100);

while ( i != guess) {
   
    if (i > guess) {
        
        console.log("Too low");
        guess = parseInt(readlineSync.question("Give me a other one: "));

    }
    else if (i < guess) {

        console.log("Too high");
        guess = parseInt(readlineSync.question("Give me a other one: "));

    }
 
    
}
console.log(i, "Well Guessed");
