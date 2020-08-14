import { HttpParams } from '@angular/common/http';
import { Dictionary } from './Dictionary';


export abstract class HttpParameters {

  public static parseParameters(parameters: Dictionary<string>): HttpParams {
    let params: HttpParams = new HttpParams();

    parameters.Values().forEach((item, i) => {
      params = params.append(parameters.Keys()[i], item);
    })

    return params;
  }

}
