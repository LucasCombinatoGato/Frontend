//funções Matemáticas (Math) -> Nativas

// SQRT e POW (Quadrado e Potência)

//calcular a raiz quadrada de 25
console.log(Math.sqrt(25));   //5

//Potência de um nº por outro
console.log(Math.pow(7, 2))   //7² = 49
console.log(Math.pow(4, 3))   //4³ = 64
console.log(Math.pow(27,1/3))   //raiz³ 27 = 3

//Funções de Arredondamento (round, ceil, floor)
console.log(Math.round(4.7));  //  5
console.log(Math.round(4.4));  //  4
console.log(Math.ceil(4.2));   //  5
console.log(Math.floor(4.7));  //  4

//Funções Número Aleatório (Math.random)
console.log(Math.random());   //Gerar um nº aleatório entre 0 e 1
console.log(Math.random()*1000);   //Gera um nº entre 0 e 1000

//Números Absolutos (converte negativo em positivo) (Math.abs)
console.log(Math.abs(-10));   //10

//Funções Analíticas Mínimo e Máximo (Math.min e Math.max)
console.log(Math.min(1,2,3,4,5,6,7,8,9));    // 1
console.log(Math.max(1,2,3,4,5,6,7,8,9));    // 9

   //   -->   DESAFIO:
   // Crie um jogo de aproximação, a pessoa da os palpites para chegar o mais perto possível
   

// Funções data e hora

const agora = new Date();

//Imprime a data atual
console.log(agora);

//Imprime a data em formato de string
console.log(agora.toDateString());

//Imprime a data em formato local
console.log(agora.toLocaleDateString());

//Getters
console.log(agora.gatFullYear);

//Operadores de data e hora

let data1 = new Date("2026-02-10");
let data2 = new Date("2026-12-18");

let diferenca = data2-data1;

//Calcular os dias para a formatura
console.log(diferenca/1000*60*60*24);