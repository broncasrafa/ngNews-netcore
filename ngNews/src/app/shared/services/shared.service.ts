import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { ArticleData } from './../models/article.model';
import { SourcesData } from '../models/source.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  baseUrl: string = environment.base_url;

  constructor(
    private http: HttpClient
  ) { }

    getListCategories(): Observable<string[]> {
      return this.http.get<string[]>(this.baseUrl + '/categories', { responseType: 'json'});
    }

    getListCountries(): Observable<string[]> {
      return this.http.get<string[]>(this.baseUrl + '/countries', { responseType: 'json'});
    }

    getListLanguages(): Observable<string[]> {
      return this.http.get<string[]>(this.baseUrl + '/languages', { responseType: 'json'});
    }

    getListSortBy(): Observable<string[]> {
      return this.http.get<string[]>(this.baseUrl + '/sortBy', { responseType: 'json'});
    }

    getBreakingNews(): Observable<ArticleData> {
      return this.http.get<ArticleData>(this.baseUrl + '/top-headlines/?country=br', { responseType: 'json'});
    }
}
