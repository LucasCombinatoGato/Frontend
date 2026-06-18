import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {

  
  valorSalvo: string = '';

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }
}
