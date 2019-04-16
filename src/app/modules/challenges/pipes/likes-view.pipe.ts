import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'likesView'
})
/**
 * пайп для форматування вількості переглядів
 */
export class LikesViewPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value < 1000) {
      return value;
    } else {
      return `${Math.round(value / 100 ) / 10}k`;
    }
  }

}
