
function sqr(a) {
    return a * a; 
}

function calcDistance (x1 , y1, x2, y2) {
    return Math.sqrt(sqr(x2- x1) + sqr(y2 - y1)); 
}


let = distanceCalcul1("Calcul la distance entre deux points (1,1)-(2,2): " + calcDistance(1, 1, 2, 2) + "<BR>");
let = distanceCalcul2("Calcul la distance entre deux points (1,1)-(3,1): " + calcDistance(1, 1, 3, 1) + "<BR>");
let = distanceCalcul3("Calcul la distance entre deux points (4,1)-(1,1): " + calcDistance(4, 1, 1, 1) + "<BR>");
let = distanceCalcul4("Calcul la distance entre deux points (-2,2)-(2,-2): " + calcDistance(-2, 2, 2, -2) + "<BR>");



console.log(calcDistance(distanceCalcul1)(distanceCalcul2)(distanceCalcul3)(distanceCalcul4));
