const readlineSync = require("readline-sync");

/*
function average(...arrs) {
    let total = 0;
    for(const arr of arrs) {
        total += arr/arrs.length;
    }
    return total;
}
*/
 
function average(arr) {
    return arr.reduce((min, max, askANumber) => min + max + askANumber) /arr.lenght;
}

function min(arr) {
    min = Math.min(...arr);
    return min;
}

function max(arr) {
    max = Math.max(...arr);
    return max;
}

function multiRand(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        arr.push(average(arr));
        arr.push(min(arr));
        arr.push(max(arr));
    }
    return (array);
} 

let askANumber = readlineSync.question("Give me a number: ");
console.log(multiRand(askANumber));