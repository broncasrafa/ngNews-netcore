import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SourcesData } from './../shared/models/source.model';
import { Dictionary } from '../shared/utils/Dictionary';
import { HttpParameters } from '../shared/utils/HttpParameters';


@Injectable({
  providedIn: 'root'
})
export class FonteNoticiaService {

  sources_url: string = environment.base_url + '/sources'

  constructor(private http: HttpClient) { }

  getSources(): Observable<SourcesData> {
    return this.http.get<SourcesData>(this.sources_url, { responseType: 'json'}, )
  }

  getFontesByFiltro(parameters: Dictionary<string>): Observable<SourcesData> {
    const params = HttpParameters.parseParameters(parameters);
    return this.http.get<SourcesData>(this.sources_url, { params: params , responseType: 'json'});
  }
}
