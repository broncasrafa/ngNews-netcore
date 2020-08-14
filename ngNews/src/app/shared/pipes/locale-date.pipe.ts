import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localeDate'
})
export class LocaleDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return this.transformJsonDateToLocaleDateString(value);
  }

  transformJsonDateToLocaleDateString(value: any) {
    if(value === undefined) {
      return null
    }

    return new Date(value).toLocaleDateString();
  }

}
