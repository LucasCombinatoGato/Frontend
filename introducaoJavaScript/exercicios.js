console.log("EXERCÍCIO 1");

let idade = 80;
console.log("Verificarei se você é menor de idade, adulto ou idoso");

if (idade < 18) {
  resultado = "menor de idade";
} else if (idade < 60) {
  resultado = "adulto";
} else {
  resultado = "idoso";
}

console.log("Com |" + idade + "| anos você é: " + resultado);

console.log("\n----------------------------------------------------------------------\n");
//--------------------------------------------------------------\\

console.log("EXERCÍCIO 2")

console.log("Farei uma tabuada do 5 que chegue ao 20")
for (i=0; i<=20; i++){
    console.log("5 x "+i+" = "+((5 * i)))
}

console.log("\n----------------------------------------------------------------------\n",);
//--------------------------------------------------------------\\

console.log("EXERCÍCIO 3");
let resul = 0;

console.log("Entre os números 1 e 20, apenas os números: ");
for (let i=1; i<=20; i++){
    if (i % 2 == 0){
        process.stdout.write(i+", ");
    }
}
console.log("\n----------------------------------------------------------------------\n");
//--------------------------------------------------------------\\