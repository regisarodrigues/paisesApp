import { PaisService } from './../../services/pais.service';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
})
export class PorRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionAtiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  getClassCSS(region: string): string {
    return region === this.regionAtiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activRegion(region: string) {
    this.regionAtiva = region;

    this.paisService
      .searchRegion(region)
      .subscribe((paises) => (this.paises = paises));
  }
}
