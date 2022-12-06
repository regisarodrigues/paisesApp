import { Component } from '@angular/core';

import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {
  nameCapital: string = '';
  temErro: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  searchPais(nameCapital: string) {
    this.temErro = false;
    this.nameCapital = nameCapital;

    this.paisService.searchCapital(nameCapital).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (err) => {
        this.temErro = true;
        this.paises = [];
      }
    );
  }
}
