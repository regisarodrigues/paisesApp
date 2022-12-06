import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  namePais: string = '';
  temErro: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) {}

  searchPais(namePais: string) {
    this.mostrarSugerencias = false;
    this.temErro = false;
    this.namePais = namePais;

    this.paisService.searchPais(namePais).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (err) => {
        this.temErro = true;
        this.paises = [];
      }
    );
  }

  sugerencias(namePais: string) {
    this.temErro = false;
    this.namePais = namePais;
    this.mostrarSugerencias = true;

    this.paisService.searchPais(namePais).subscribe(
      (paises) => (this.paisesSugeridos = paises.splice(0, 5)),
      (err) => (this.paisesSugeridos = [])
    );
  }

  searchSugerido(namePais: string) {
    this.searchPais(namePais);
  }
}
