let readline = require("readline-sync");

let Tsegundos= Number(readline.question("Digite um valor em segundos: "));

let horas = Math.floor(Tsegundos/3600);
let minutos = Math.floor((Tsegundos/3600)/60)
let segundos = Tsegundos%60;

console.log(`${horas}h ${minutos}m ${segundos}s`);