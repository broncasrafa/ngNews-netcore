import { Component, OnInit } from '@angular/core';
import { ArticleData } from '../shared/models/article.model';
import { NoticiasService } from '../shared/services/noticias.service';
import { SharedService } from '../shared/services/shared.service';
import { Filtro, FiltrosUtilizados } from '../shared/models/filtros.model';
import { Dictionary } from '../shared/utils/Dictionary';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noticias: ArticleData;

  tipoBreakingNewsTicker = '2';

  // filtros
  tituloFiltro: string = 'top notícias';
  tipoFiltro: string = "top-headlines";
  dadosFiltros: Filtro;
  showSearchText: boolean = true;
  filtrosUtilizados: FiltrosUtilizados;

  constructor(
    private noticiasService: NoticiasService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.carregarDadosFiltros();
    this.carregarNoticiasInit();
  }

  carregarNoticiasInit() {
    const parameters = new Dictionary<string>();
    parameters.Add("country", "br");

    this.noticiasService.getNoticias(parameters).subscribe((data) => {
      this.noticias = data
    });
  }

  carregarDadosFiltros() {
    this.dadosFiltros =  new Filtro();

    this.sharedService.getListCategories().subscribe((data) => {
      this.dadosFiltros.ListaCategorias = data;
    });

    this.sharedService.getListCountries().subscribe((data) => {
      this.dadosFiltros.ListaPaises = data;
    });
  }

  filtrar(dataFiltro: FiltrosUtilizados) {
    if(dataFiltro !== undefined) {
      let filterParameters = new Dictionary<string>();
      filterParameters = this.getFiltros(dataFiltro);

      this.filtrosUtilizados = dataFiltro;

      this.noticiasService.getNoticias(filterParameters)
        .subscribe((data) => {
          this.noticias = data;
        }
      );
    }
  }

  exibirNoticiasPorPagina(qtdePorPagina: string) {
    let parameters = new Dictionary<string>();

    if(this.filtrosUtilizados !== undefined) {
      parameters = this.getFiltros(this.filtrosUtilizados)
    }
    else {
      parameters.Add("country", "br");
    }

    parameters.Add("pageSize", qtdePorPagina);

    this.noticiasService.getNoticias(parameters)
      .subscribe((data) => {
        this.noticias = data;
      }
    );
  }

  getFiltros(dataFiltro: FiltrosUtilizados): Dictionary<string> {
    const parameters = new Dictionary<string>();

    if(dataFiltro.IdPais !== undefined) {
      parameters.Add("country", dataFiltro.IdPais);
    }
    if(dataFiltro.IdCategoria !== undefined) {
      parameters.Add("category", dataFiltro.IdCategoria);
    }
    if(dataFiltro.Term !== undefined) {
      parameters.Add("q", dataFiltro.Term);
    }

    return parameters;
  }
}
