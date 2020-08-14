import { Dictionary } from './../utils/Dictionary';
import { Source } from './source.model';

export class Filtro {
  ListaCategorias: string[];
  ListaIdiomas: string[];
  ListaPaises: string[];
  ListaSortBy: string[];
  ListaFontes: Source[];
  ShowSearchText: boolean;
  Term: string;
}

export class FiltrosUtilizados {
  Term: string;
  IdCategoria: string;
  IdIdioma: string;
  IdPais: string;
  Sources: string[];
  DateTo: string;
  DateFrom: string;
  IdSortBy: string;
}
