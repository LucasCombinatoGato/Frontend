// Estudos avançados de POO em JavaScript

// Criação de uma Classe

class Pessoa {
    #nome; // Atributo privado
    #idade; // Atributo privado
    #cpf; // Atributo privado

    // Construtor
    constructor(nome, idade, cpf){
    this.#nome = nome;
    this.#idade = idade;
    this.#cpf = cpf;
    }

    // Getters and Setters
    get getNome(){   // Pegam o valor do atributo privado
        return this.#nome;
    }
    get getIdade(){   // Pegam o valor do atributo privado
        return this.#idade;
    }
    get getCpf(){   // Pegam o valor do atributo privado
        return this.#cpf;
    }
    get setIdade(idade){   // Alterar o valor da Idade
        this.#idade = idade;
    }

    // Método de Acesso
    exibirInfo(){
        console.log(
            `Nome: ${this.#nome}\n Idade: ${this.#idade}\n CPF: ${this.#cpf}`
        );
    }
}

// Instanciar objetos de pessoas
let pessoa1 = new Pessoa ("João", 25, "123.456.789-00");
let pessoa2 = new Pessoa ("Maria", 30, "987.654.321-00");

pessoa1.exibirInfo();
pessoa2.exibirInfo();

// Alterar a idade da pessao 1

pessoa1.setIdade(26);
pessoa1.exibirInfo();

// Herança em POO (extends)

class Funcionario extends Pessoa{
    // Novos atributos
    #cargo;
    #salario;

    // Construtor
    constructor(nome, idade, cpf, cargo, salario){
        super(nome, idade, cpf); // Chama os atributos da superclasse
        this.#cargo = cargo;
        this.#salario = salario;
    }

    // Método públicos (Get Set)
    get getCargo(){
        return this.#cargo;
    }
    get getSalario(){
        return this.#salario;
    }
    set setCargo(cargo){
        this.#cargo = cargo
    }
    set setSalario(salario){
        this.#salario = salario
    }

    // Método de acesso
    exibirInfo(){ //polimorfismo
        super.exibirInfo();
        console.log(`Cargo: ${this.#cargo}\nSalário: ${this.#salario}`);    
    }
}

// Instanciar OBJ da classe Funcionário

let funcionario1 = new Funcionario("Pedro", 27, "321.654.987-00", "Motorista", 3000);
funcionario1.exibirInfo();
funcionario1.setSalario(3500);
funcionario1.exibirInfo();