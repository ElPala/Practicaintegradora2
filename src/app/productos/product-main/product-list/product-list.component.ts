import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from '../Product';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  list: Product[];
  @Input() search;
  private subscript: Subscription;
  constructor(private Service: ProductsService) {
    this.list =this.Service.products;
   }

  ngOnInit(): void {
    this.subscript = this.Service.subject.subscribe(
      (dato: Product[]) => {
        console.log('Datos actualizados: ' + dato);
        this.list = dato;
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        console.log('Completado ');
      }
    )
  }


}
