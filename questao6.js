let readline = require("readline-sync");

let b = parseFloat(readline.question("Digite a base: "));
let h = parseFloat(readline.question("Digite a altura: "));
let a = parseFloat;
let p = parseFloat;

a= b*h;
p=2*(b+h);

console.log(`Area é de: ${a.toFixed(1)}
Perimetro é de: ${p.toFixed(1)}`);
