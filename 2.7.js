const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question("Give me a number: "));
let sum = 0;
for (let i = 0; i < n; i++) {
    sum = sum + parseInt(readlineSync.question('Give me a number: ')); 
}
console.log(sum); 