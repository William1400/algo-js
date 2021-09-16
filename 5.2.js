const readlineSync = require("readline-sync");

/**
 * Asks to the user information about the tv serie, registers the information in a JSON object and returns it.
 * @returns JSON object containing the information of the tv serie given by de user.
 */
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
    };
    
    return a;
}

/**
 * Returns a shuffled list of the names of the cast members of a tv serie. 
 * @param {Object} tvSerie JSON object representing a tv serie.
 * @returns Shuffled list of the names of the cast members of the tv serie. 
 */
function randomizeCast(tvSerie) {
    let randomNames = tvSerie.aNamesOfCast;
    let shuffledRandomNames = randomNames.sort((a, b) => 0.5 - Math.random());   
    return shuffledRandomNames;
}

let v = askTvSerie();
let randomNames = randomizeCast(v);


