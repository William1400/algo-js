const readlineSync = require("readline-sync");

let n1 = parseInt(readlineSync.question("give me a first float: "));
let n2 = parseInt(readlineSync.question("give me a second float: "));

console.log(n1 * n2);
