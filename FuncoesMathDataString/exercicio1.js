var prompt = require("prompt-sync")();

var num_sorteado = Math.random() * 100;
num_sorteado = Math.round(num_sorteado);
var num_palpite = 1

console.log(num_sorteado);

do {
    var num_chute = Number(prompt("Dê seu " + num_palpite + "º palpite: "));
    if (num_chute < num_sorteado){
        console.log(num_chute+" é menor");
    }else if (num_chute > num_sorteado){
        console.log(num_chute+" é maior");
    } else{
        console.log("Você acertou! O número era o |"+num_sorteado+"| e você acertou em |"+num_palpite+"| tentativas!");
        break
    }
    num_palpite++
} while (num_chute != num_sorteado);
