const readlineSync = require("readline-sync");

let n1 = parseInt(readlineSync.question("give me a first integer: "));
let n2 = parseInt(readlineSync.question("give me a second integer: "));

console.log(n1 % n2);
