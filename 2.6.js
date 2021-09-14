const readlineSync = require("readline-sync");

let dayNumber = parseInt(readlineSync.question("Give me a number between 1 and 7: "));
if ( dayNumber == 1 ) {
    console.log("Monday");
}
else if (dayNumber ==2) {
    console.log("Thuesday");
}
else if (dayNumber ==3) {
    console.log("Wednesday");
}
else if (dayNumber ==4) {
    console.log("Thursday");
}
else if (dayNumber ==5) {
    console.log("Friday");
}
else if (dayNumber ==6) {
    console.log("Saterday");
}
else if (dayNumber ==7) {
    console.log("Sunday");
}

