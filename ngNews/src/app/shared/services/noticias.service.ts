import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { ArticleData } from './../models/article.model';
import { Dictionary } from '../utils/Dictionary';
import { HttpParameters } from '../utils/HttpParameters';
import { Util } from '../utils/Utils';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  topHeadlineUrl: string = environment.base_url + '/top-headlines';
  everythingUrl: string = environment.base_url + '/everything';

  constructor(
    private http: HttpClient
  ) { }

  getNoticias(parameters: Dictionary<string>): Observable<ArticleData> {
    const params = HttpParameters.parseParameters(parameters);
    return this.http.get<ArticleData>(this.topHeadlineUrl, { params: params, responseType: 'json'});
  }

  getNoticiasFonte(parameters: Dictionary<string>): Observable<ArticleData> {
    const params = HttpParameters.parseParameters(parameters);
    return this.http.get<ArticleData>(this.everythingUrl, { params: params, responseType: 'json'});
  }

  getNoticiasGerais(parameters: Dictionary<string>): Observable<ArticleData> {
    const params = HttpParameters.parseParameters(parameters);
    return this.http.get<ArticleData>(this.everythingUrl, { params: params, responseType: 'json'});
  }

  getNoticiasGeraisByFiltro(filterParams: Dictionary<string>): Observable<ArticleData> {
    const params = HttpParameters.parseParameters(filterParams);
    return this.http.get<ArticleData>(this.everythingUrl, { params: params, responseType: 'json'});
  }
}
