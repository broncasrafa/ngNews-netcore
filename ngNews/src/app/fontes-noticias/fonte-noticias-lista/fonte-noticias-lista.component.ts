import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleData } from 'src/app/shared/models/article.model';
import { Source } from 'src/app/shared/models/source.model';
import { Filtro, FiltrosUtilizados } from 'src/app/shared/models/filtros.model';
import { NoticiasService } from 'src/app/shared/services/noticias.service';
import { Dictionary } from 'src/app/shared/utils/Dictionary';
import { FonteNoticiaService } from '../fontes-noticias.service';



@Component({
  selector: 'app-fonte-noticias-lista',
  templateUrl: './fonte-noticias-lista.component.html',
  styleUrls: ['./fonte-noticias-lista.component.css']
})
export class FonteNoticiasListaComponent implements OnInit {

  sourceId: string;
  source: Source;
  tituloFormatado: string;
  noticias: ArticleData;
  tipoBreakingNewsTicker = '1';

  // filtros
  tituloFiltro: string = 'notícias';
  tipoFiltro: string = "top-headlines";
  dadosFiltros: Filtro;
  showSearchText: boolean = true;
  filtrosUtilizados: FiltrosUtilizados;

  constructor(
    private noticiasService: NoticiasService,
    private sourcesService: FonteNoticiaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.sourceId = param.source
    });

    this.dadosFiltros =  new Filtro();

    this.carregarDadosFonte(this.sourceId);
    this.carregarNoticiasPorFonte(this.sourceId);
  }

  carregarDadosFonte(source) {
    this.sourcesService.getSources()
      .subscribe((data) => {
        const sourceData = data.Sources.find(x => x.Id === source);
        this.source = sourceData;
        this.tituloFormatado = `notícias de ${sourceData.Name}`
      }
    );
  }

  carregarNoticiasPorFonte(source: string) {
    const parameters = new Dictionary<string>();
    parameters.Add("sources", source);

    this.noticiasService.getNoticiasFonte(parameters)
      .subscribe((data) => {
        this.noticias = data;
      }
    );
  }

  filtrar(dataFiltro: FiltrosUtilizados) {
    if(dataFiltro !== undefined) {
      let filterParameters = new Dictionary<string>();
      filterParameters = this.getFiltros(dataFiltro);

      this.filtrosUtilizados = dataFiltro;

      this.noticiasService.getNoticiasFonte(filterParameters)
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
      parameters.Add("sources", this.sourceId);
    }

    parameters.Add("pageSize", qtdePorPagina);

    this.noticiasService.getNoticiasFonte(parameters)
      .subscribe((data) => {
        this.noticias = data;
      }
    );
  }

  getFiltros(dataFiltro: FiltrosUtilizados): Dictionary<string> {
    const parameters = new Dictionary<string>();

    parameters.Add("sources", this.sourceId);

    if(dataFiltro.Term !== undefined) {
      parameters.Add("q", dataFiltro.Term);
    }

    return parameters;
  }
}
