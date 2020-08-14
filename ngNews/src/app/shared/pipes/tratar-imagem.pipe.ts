import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tratarImagem'
})
export class TratarImagemPipe implements PipeTransform {

  transform(value: any): string {
    return this.transformToImageNotFound(value);
  }

  transformToImageNotFound(value: any) {
    if(value === undefined) {
      return 'url(assets/template/img/404-img-2.png)';
    }

    if(value === null || value.includes('(null)')) {
      return 'url(assets/template/img/404-img-2.png)';
    }

    if(value.includes('(undefined)')) {
      return 'url(assets/template/img/404-img-2.png)';
    }

    if(value.includes('filters:cover():strip_icc()')) {
      return 'url(assets/template/img/404-img-2.png)';
    }
    return value;
  }
}
