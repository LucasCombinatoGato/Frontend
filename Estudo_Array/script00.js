//Declarações de um array
let array = []; //array dinâmico

//Tipos de array
let arrayNumerico = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayTexto = ["Sapato", "chinelo", "Tamamco"];
let arrauMisto = [1, "José", true];

//Tamanho de um array (lenght)
console.log(arrayNumerico.length);  //9

//Acessar a posição de array
console.log(arrayTexto[1]); //Chinelo

//adicionar elementos no array
//push / unshift
//no final
arrayTexto.push("Tênis");
console.log(arrayTexto);

//no começo
arrayTexto.unshift("Sandália");
console.log(arrayTexto);

//Trocar valor de elemento
arrayTexto[2]="Crocs";
console.log(arrayTexto);
//Substitúi o elemento da 3ª posição [2] por Crocs

//Remover elementos (shift / pop)
//No começo
arrayTexto.shift();
console.log(arrayTexto);

//Remove o final
arrayTexto.pop();
console.log(arrayTexto);

//Laços de repetição
for(let i=0; i<arrayNumerico.length; i++){
    console.log[`indice[${i}]=${arrayNumerico[i]}`]; //Forma moderna de incluir texto``
}

//forEach (para cada elemento do array) --> só pode ser usada em um array

arrayMisto.forEach(e => {
    console.log(e);
})

//Métodos úteis de Array

//IndexOf
console.log(arrayNumerico.indexOf(5));  //4
console.log(arrayNumerico.indexOf(10));  //-1 (elemento inexistente)

//Remover elemento de uma posição
//Splice
arrayMisto.splice(2,1); //Remove o elemento do índice 2, por uma única vez
console.log(arrayMisto);                                    