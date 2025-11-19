let readline = require("readline-sync");

let n = Number(readline.question("Digite o numero: "));

function fat(x){
    if(n<0) return "Não existe fatorial negativo!"
    let resul = 1;
for(let i = 1; i<=x; i++){
    resul *= i;
}
return resul;
}
console.log(`resultado de ${n}: ${fat(n)}`);