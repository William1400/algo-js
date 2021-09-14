const readlineSync = require("readline-sync");

let n1 = (readlineSync.question("What is your shoes size?: "));
let n2 = (readlineSync.question("What is your year of birth?: "));

console.log(((n1 * 2 + 5 ) * 50 - n2) + 1766);// 42 . 1989 result = 4227
