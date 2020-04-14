import { Injectable } from '@angular/core';
import{ Subject} from'rxjs';
import { Product, Especificacion } from './product-main/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  subject = new Subject<Product[]>();
  products = [
    new Product(1,'xbox 365','xbox','play console', 10000,4,[new Especificacion('peso',1,'kg')],false),
    new Product(2,'xbox X','xbox','original play console', 5000,5,[new Especificacion('peso',1,'kg')],false)]

  constructor() {
    this.subject.next(this.products);
   }
}
