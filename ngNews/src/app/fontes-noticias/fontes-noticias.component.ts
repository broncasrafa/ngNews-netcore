import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FonteNoticiaService } from './fontes-noticias.service';
import { SharedService } from './../shared/services/shared.service';
import { Source } from '../shared/models/source.model';
import { Filtro, FiltrosUtilizados } from '../shared/models/filtros.model';
import { Dictionary } from '../shared/utils/Dictionary';

@Component({
  selector: 'app-fontes-noticias',
  templateUrl: './fontes-noticias.component.html',
  styleUrls: ['./fontes-noticias.component.css']
})
export class FontesNoticiasComponent implements OnInit {

  sources: Source[];

  // filtros
  tituloFiltro: string = 'fontes de notícias';
  tipoFiltro: string = "sources";
  dadosFiltros: Filtro;

  constructor(
    private sourcesService: FonteNoticiaService,
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit() {
    this.carregarDadosFiltros();
    this.carregarFontesNoticiasGeral();
  }

  carregarFontesNoticiasGeral() {
    this.sourcesService.getSources().subscribe((data) => {
      this.sources = data.Sources;
    })
  }

  carregarDadosFiltros() {
    this.dadosFiltros =  new Filtro();

    this.sharedService.getListCategories().subscribe((data) => {
      this.dadosFiltros.ListaCategorias = data;
    })

    this.sharedService.getListLanguages().subscribe((data) => {
      this.dadosFiltros.ListaIdiomas = data;
    })

    this.sharedService.getListCountries().subscribe((data) => {
      this.dadosFiltros.ListaPaises = data;
    })
  }

  filtrar(dataFiltro: FiltrosUtilizados) {

    if(dataFiltro !== undefined) {
      const filterParameters = new Dictionary<string>();

      if(dataFiltro.IdCategoria !== undefined){
        filterParameters.Add("category", dataFiltro.IdCategoria);
      }
      if(dataFiltro.IdIdioma !== undefined){
        filterParameters.Add("language", dataFiltro.IdIdioma);
      }
      if(dataFiltro.IdPais !== undefined){
        filterParameters.Add("country", dataFiltro.IdPais);
      }

      this.sourcesService.getFontesByFiltro(filterParameters)
        .subscribe((data) => {
          this.sources = data.Sources;
        }
      );

    }
  }
}
