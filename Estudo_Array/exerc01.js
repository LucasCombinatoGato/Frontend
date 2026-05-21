var prompt = require("prompt-sync")();

var i = 0
resposta = true
lista_notas = []
do{
    var nota = Number(prompt("\nDiga-me o valor da sua "+(i+1)+"ª nota: "));
    lista_notas.push(nota);
    resposta = String(prompt("Deseja adicionar outra nota? (S/N): "));
    if (resposta == "s" || resposta == "S"){
        resposta = true;
        i++;
    }else {
        resposta = false;
        break;
    }
}while(resposta = true);

console.log("Você tem "+lista_notas.length+" notas")

console.log(lista_notas.length)

let soma_valores = lista_notas.reduce((soma_valores,e)=>soma_valores+e);
console.log(soma_valores);


resultado = soma_valores / lista_notas.length
console.log("A média das notas são |"+resultado+"|")