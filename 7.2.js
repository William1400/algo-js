const readlineSync = require("readline-sync");

// take input from the user
const number = parseInt(readlineSync.question('Enter the integer : '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci first n  number: ');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}