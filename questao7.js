let readline = require("readline-sync");

let word = readline.question("Digite uma palavra: ").toLowerCase();
let vogais = ["a", "e", "i", "o", "u"];
let cont = 0;

for(let letra of word){
    if(vogais.includes(letra)){
        cont++;
    }
}
console.log(`A palavra "${word}" possui ${cont} vogais.`);