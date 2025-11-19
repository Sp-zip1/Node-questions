let readline = require("readline-sync");

let temp = parseFloat(readline.question("Qual a temperatura em °C: "));

let f = parseFloat;

f = 9/5*temp+32;

console.log(`Conveção de ${temp.toFixed(1)} para °F é: ${f.toFixed(2)}°F`);