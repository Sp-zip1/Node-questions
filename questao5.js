let readline = require("readline-sync");

let n = Number(readline.question("Digite um numero: "));
console.log(`todos os pares de 0 até ${n} são: `);

for(let i=0;i<=n;i++){
    if(i%2==0){
        console.log(`${i}`);
    }
}