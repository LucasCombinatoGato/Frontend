import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  imports: [],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {

  // Atributos
  contador: number = 0;
  valorAtual: string = "";
  valorSalvo: string = "";
  isMouseOver: boolean = false;

  // Função sem parâmetro
  incrementar(){
    this.contador++; // Soma +1 ao contador toda vez que a função for chamada
  }

  // Função com parâmetro
  onKeyUp(event: any){
    this.valorAtual = event.target.value;
  }

  // Função salvar valor
  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  // Alternar
  alternarDestaque(){
    this.isMouseOver = !this.isMouseOver; // Inverte o valor da boolean
    
  }
}
