import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Declara um atributo
  nome: string = 'Lucas';
  // Interpolação {{}}

  imgUrl: string = 'https://www.petmag.com.br/app/uploads/2016/05/tuna1.png';
  // Property binding [] (Unidiretional TS -> HTML)

  botaoStatus: boolean = true;
  // Property binding []

  // Style e Class Binding = alteração de Classe e Style via Data Biding
  classeAlerta: string = "alert-sucess"
}
