let readline = require("readline-sync");

let n = Number(readline.question("Digite um numero: "));
let soma=0;

for(let i=1;i<=n;i++){
    soma+= i;
}
console.log(`a soma de 1 até ${n} é: ${soma}`);