import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from './../shared/services/noticias.service';
import { SharedService } from './../shared/services/shared.service';
import { Filtro, FiltrosUtilizados } from '../shared/models/filtros.model';
import { ArticleData } from '../shared/models/article.model';
import { Dictionary } from '../shared/utils/Dictionary';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  category: string;
  tituloFormatado: string;
  noticias: ArticleData;
  tipoBreakingNewsTicker = '1';

  // filtros
  tituloFiltro: string = 'top notícias';
  tipoFiltro: string = "top-headlines";
  dadosFiltros: Filtro;
  showSearchText: boolean = true;
  filtrosUtilizados: FiltrosUtilizados;

  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private noticiasService: NoticiasService
  ) { }

  ngOnInit() {

    this.route.params.subscribe((param) => {
      this.category = param.category
    });

    this.carregarDadosFiltros();
    this.carregarNoticiasPorCategoria(this.category);
    this.tituloFormatado = this.formatarTitulo(this.category);
  }

  carregarNoticiasPorCategoria(categoria) {
    const parameters = new Dictionary<string>();
    parameters.Add('category', categoria);
    parameters.Add('country', 'br');

    this.noticiasService.getNoticias(categoria)
      .subscribe((data) => {
        this.noticias = data;
      }
    );
  }

  carregarDadosFiltros() {
    this.dadosFiltros =  new Filtro();

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

    parameters.Add("category", this.category);
    parameters.Add("pageSize", qtdePorPagina);

    this.noticiasService.getNoticias(parameters)
      .subscribe((data) => {
        this.noticias = data;
      }
    );
  }

  getFiltros(dataFiltro: FiltrosUtilizados): Dictionary<string> {
    const parameters = new Dictionary<string>();
    parameters.Add("category", this.category);

    if(dataFiltro.IdPais !== undefined) {
      parameters.Add("country", dataFiltro.IdPais);
    }
    if(dataFiltro.Term !== undefined) {
      parameters.Add("q", dataFiltro.Term);
    }

    return parameters;
  }

  formatarTitulo(categoria) {
    let result = '';
    switch(categoria) {
      case 'business': result = 'notícias de negócios do Brasil e pelo mundo'; break;
      case 'entertainment': result = 'notícias de entretenimento do Brasil e pelo mundo'; break;
      case 'general': result = 'notícias gerais do Brasil e pelo mundo'; break;
      case 'health': result = 'notícias de saúde do Brasil e pelo mundo'; break;
      case 'science': result = 'notícias de ciências do Brasil e pelo mundo'; break;
      case 'sports': result = 'notícias de esportes do Brasil e pelo mundo'; break;
      case 'technology': result = 'notícias de técnologia do Brasil e pelo mundo'; break;
    }
    return result;
  }
}
