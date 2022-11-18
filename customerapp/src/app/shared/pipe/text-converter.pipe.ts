import { Pipe, PipeTransform } from '@angular/core';

// {{firstName | textConverter : 'upper'}}
@Pipe({
  name: 'textConverter'
})
export class TextConverterPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if(args[0] === 'upper') 
      return value.toUpperCase();
    else if(args[0] === 'lower') {
      return value.toLowerCase();
    } else {
      return value;
    }
  }
}
