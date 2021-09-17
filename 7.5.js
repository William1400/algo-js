const readlineSync = require("readline-sync");

var MaxTableau = 8;
var K,L,I,J;
var Tableau = new Array(15, 10, 23, 2, 8, 9, 14, 16);
console.log("Avant:");
for(K = 0; K < MaxTableau; K++) console.log(Tableau[K],", ");

for(I = MaxTableau - 2;I >= 0; I--) {
   for(J = 0; J <= I; J++) {
       if(Tableau[J + 1] < Tableau[J]) {
           var t = Tableau[J + 1];
           Tableau[J + 1] = Tableau[J];
           Tableau[J] = t;
       }
   }
}

console.log("<br>Après:");
for(L = 0; L < MaxTableau; L++) {
   console.log(Tableau[L],", ");
}
