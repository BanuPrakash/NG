import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../model/Product';
@Pipe({
  name: 'filterByBrand'
})
export class FilterByBrandPipe implements PipeTransform {

  transform(items: Product[], ...args: any[]): Product[] {
    if(args[0] !== 'All') {
      return items.filter(item => item.productSeller === args[0])
    } else {
      return items;
    }
  }

}
