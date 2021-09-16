const readlineSync = require("readline-sync");

function askTvSerie() { 
    
    let name = readlineSync.question("Name: \n");
    let productionYear = readlineSync.question("Production year: \n");

    let namesOfCast = [];
    let nameOfCast = readlineSync.question("Name of the cast member (type enter to stop): \n");
    while (nameOfCast != "") {
        namesOfCast.push(nameOfCast); 
        nameOfCast = readlineSync.question("Name of the cast member (type enter to stop): \n");
    }

    let a = {
        aName: name,
        aProdutionYear: productionYear,
        aNamesOfCast: namesOfCast,
    }
    
    return a;
}

let v = askTvSerie();

console.log(v);




