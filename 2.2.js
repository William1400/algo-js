const readlineSync = require("readline-sync");

let min = parseInt(readlineSync.question("Enter the minimum number: "));
let max = parseInt(readlineSync.question("Enter the maximum number: "));
let current = parseInt(readlineSync.question("Enter one number: "));

if(min > max) {
    console.log("min must be smaller than max!");
    process.exitCode = 1;
}
else if ((current >= min) && (current <= max)) {
    console.log("curent is beteween min and max");
}
