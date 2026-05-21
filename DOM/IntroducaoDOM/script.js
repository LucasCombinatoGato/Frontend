// DOM --> Document Object Model
// Script de manpulação DOM
// getElementById --> variável simples - id é sempre única

// Usar sempre o document para manipular o DOM
let titulo = document.getElementById("titulo"); //Busca no html o elemento com a id correspondente a titulo
console.log(titulo); // Mostra a informação da id
titulo.innerText = "Outro título para o site";

//getElementByTagName --> vetor (array) de elementos
paragrafo[0].innerText = 'Exemplo do parágrafo modificado por DOM'; //modificar elemento
paragrafo[1].style.color = "red"; //Modificar o style do elemento

// getElementoByClassName --> vetor de elementos
let descricao = document.getElementsByClassName("descricao");
//modificar elementos do array
for (let i=0; i<descricao.length; i++){
    descricao[i].style.color = "blue";
}

// QuerySelector --. variável simples = seleciona sempre o primeiro lemento com o selector
let p = document.querySelector("p");
// Modificar a fonte
p.style.fontWeight = "bold";

// querySelectorAll --> vetor de elementos --> seleciona todos os elementos
let descricaoAll = document.querySelectorAll("Desclicao");
descricaoAll.forEach(e => e.style.fontWeight = "bold");

// Eventos listener (ouvintes)

// Chamar pelo nome da função
function MudarCorFundo(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "lightgreen";
}

// Chamar diretamente no script o ouvinte
document.getElementById("bntColor").addEventListener("click", OutraCor);

function OutraCor(){
    let body = docuyment.querySelector("body");
    body.style.backgroundColor = "orange";
}