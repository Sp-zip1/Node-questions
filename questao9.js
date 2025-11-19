let readline = require("readline-sync");

let user = readline.question("User: ");
let senha = readline.question("senha: ",{hideEchoBack: true});

if(user == "admin" && senha == "1234" ){
    console.log("Login realizado com sucesso!");
}else{
    console.log("Login ou senha errados!");
}