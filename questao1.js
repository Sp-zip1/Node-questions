let readline = require("readline-sync")

let n = readline.question("Digite um valor: ")


n = parseInt(n)

if(n == 0){
    console.log("O valor é igual a %d; parabens!", n);
}else if(n > 0){
    console.log("O valor é positivo: %d",n);    
}else{
    console.log("O valor é negativo: %d",n);
}