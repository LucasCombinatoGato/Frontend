// Estudos de POO em JavaScript
// Diferença entre Procedural e POO

// Declaração de uma variável em procedural

let produto1 = {
    nome: "Impressora",
    preço: 1000,
    marca: "HP",
    disponivel: true,
    desconto: function(){
        return this.preco * 0.1; // Desconto de 10% quando preciso
    }
} // coleção

let produto2 = {
    nome: "WebCam",
    preco: 550,
    marca: "MultiLaser",
    disponivel: false,
    desconto: function(){
        return this.preco * 0.2; //Desconto de 20%
    }
}

// Imprimindo informações do produto
console.log(
  `Produto: ${produto1.nome},
  Preço: ${produto1.preco},
  Marca: ${produto1.marca},
  Disponível: ${produto1.disponivel ? "Sim" : "Não" }, 
  Desconto: ${produto1.disponível ? produto1.desconto() : "Não há produtos no estoque!"}`
);

// Declaração de uma classe para criação de um objeto (produto) usando POO
class Produto{
    nome;
    preco;
    marca;
    disponivel;

    // MÉTODOS
    // Contrutor
    constructor(nome, preco, marca, disponibilidade){
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
        this.disponivel = disponibilidade
    }

    // Método para aplicar desconto
    desconto(){
        return this.preco * 0.1; // 10%
    }

    toString(){
        return `Produto: ${produto1.nome},
Preço: ${produto1.preco},
Marca: ${produto1.marca},
Disponível: ${produto1.disponivel ? "Sim" : "Não"},
Desconto: ${produto1.disponível ? produto1.desconto() : "" }`
    }

}

// Declara meus produtos
let p1 = new Produto ("Microfone", 600, "Eglin", true);
let p2 = new Produto ("HeadSet", 150, "Dragon", true);

console.log(p1.toString());