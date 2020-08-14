import { Component, OnInit } from '@angular/core';
import { ArticleData } from '../shared/models/article.model';
import { Filtro, FiltrosUtilizados } from '../shared/models/filtros.model';
import { Source } from '../shared/models/source.model';
import { Dictionary } from '../shared/utils/Dictionary';
import { NoticiasService } from '../shared/services/noticias.service';
import { SharedService } from '../shared/services/shared.service';
import { FonteNoticiaService } from '../fontes-noticias/fontes-noticias.service';
import { Util } from '../shared/utils/Utils';



@Component({
  selector: 'app-geral',
  templateUrl: './geral.component.html',
  styleUrls: ['./geral.component.css']
})
export class GeralComponent implements OnInit {

  noticias: ArticleData;
  sources: Source[];
  tipoBreakingNewsTicker = '1';

  // filtros
  tituloFiltro: string = 'notícias gerais';
  tipoFiltro: string = "everything";
  dadosFiltros: Filtro;
  showSearchText: boolean = true;

  constructor(
    private noticiasService: NoticiasService,
    private sourcesService: FonteNoticiaService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.preencherDadosFiltros();
    this.carregarNoticiasInit();
  }

  carregarNoticiasInit() {
    this.sourcesService.getSources().subscribe((data) => {
      this.sources = data.Sources;

      const sourcesRandom = this.getSourcesRandom();

      const parameters = new Dictionary<string>();
      parameters.Add('sources', sourcesRandom);

      this.noticiasService.getNoticiasGerais(parameters).subscribe((res) => {
        this.noticias = res
      });
    });


  }

  preencherDadosFiltros() {
    this.dadosFiltros =  new Filtro();

    this.sharedService.getListSortBy().subscribe((data) => {
      this.dadosFiltros.ListaSortBy = data;
    });

    this.sharedService.getListLanguages().subscribe((data) => {
      this.dadosFiltros.ListaIdiomas = data;
    });

    this.sourcesService.getSources().subscribe((data) => {
      this.dadosFiltros.ListaFontes = data.Sources;
    })
  }

  filtrar(dataFiltro: FiltrosUtilizados) {
    if(dataFiltro !== undefined) {
      const filterParameters = new Dictionary<string>();
      // from, to, sortBy, language
      if(dataFiltro.Sources !== undefined) {
        filterParameters.Add("sources", dataFiltro.Sources.join(','));
      }
      if(dataFiltro.Term !== undefined) {
        filterParameters.Add("q", dataFiltro.Term);
      }
      if(dataFiltro.IdSortBy !== undefined) {
        filterParameters.Add("sortBy", dataFiltro.IdSortBy);
      }
      if(dataFiltro.IdIdioma !== undefined) {
        filterParameters.Add("language", dataFiltro.IdIdioma);
      }
      if(dataFiltro.DateTo !== undefined) {
        filterParameters.Add("to", dataFiltro.DateTo);
      }
      if(dataFiltro.DateFrom !== undefined) {
        filterParameters.Add("from", dataFiltro.DateFrom);
      }

      this.noticiasService.getNoticiasGeraisByFiltro(filterParameters)
        .subscribe((data) => {
          this.noticias = data;
        }
      );
    }
  }

  getSourcesRandom() {
    const result = [];

    for(let i = 0; i < 10; i++) {
      const random = Util.getRandomInt(1, this.sources.length);
      result.push(this.sources[random].Id)
    }

    const distinctValues = [...new Set(result.map(c => c))];
    return distinctValues.join(',');
  }
}
