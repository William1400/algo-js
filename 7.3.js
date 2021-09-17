const readlineSync = require("readline-sync");

// take input from the user

function getDivisorsCnt(number) {
    
    let n = Number(readlineSync.question('Enter the positif integer : '));
    let divisors = [];
    
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {

            divisors.push(i)

        }

    }
    if (n % 2 != 0 || n === 1) {
        return (n + "is" + "prime");

    }

    return divisors;

}

console.log(getDivisorsCnt());

