const readlineSync = require("readline-sync");

/**
 * returns random number between one and ten.
 * @returns random number between one and ten.
 */
function rand10() {
    return (1 + Math.floor(Math.random() * 10));
}

/**
 * returns an array containing n random numbers
 * @param {Number} n number of random numbers 
 * @returns array containing n random numbers
 */
function multiRand(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(rand10());
    }
    return (array);
}

let numberOfRandomNumbers = readlineSync.question("Give me a number of random numbers: ");
console.log(multiRand(numberOfRandomNumbers));

