let readline = require("readline-sync");

let av1, av2, av3;

av1 = parseFloat(readline.question("Nota 1: "));
av2 = parseFloat(readline.question("Nota 2: "));
av3 = parseFloat(readline.question("Nota 3: "));

let media = parseFloat;

media = ((av1*2)+(av2*3)+(av3*5))/10;
console.log("Media ponderada: %f", media.toFixed(1));