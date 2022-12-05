import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomsm'
})
export class NomsmPipe implements PipeTransform {
  transform(nom:string): string {
    return '*'+nom+'*';
  }
}

