const readlineSync = require("readline-sync");

let favoriteNumber = parseInt(readlineSync.question("Give me your favorite number: "));
while (favoriteNumber != 42) {
    console.log("Are you sure?");
    favoriteNumber = parseInt(readlineSync.question("Give me your favorite number: "));
}