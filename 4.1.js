const readlineSync = require("readline-sync");

/**
 * calculate the surface of the rectangle
 * @param {Number} x length of the rectangle
 * @param {Number} y width of the rectangle
 * @returns surface of the rectangle
 */
function calcSurface(x , y) {
    return (x * y);
}

let length = parseFloat(readlineSync.question('Give me a length: '));
let width = parseFloat(readlineSync.question('Give me a width: '));

console.log(calcSurface(length, width));