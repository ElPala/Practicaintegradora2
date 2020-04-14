import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from '../../Product';
import { faEdit,faSearch,faTrash } from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute} from '@angular/router';
import { ProductsService } from 'src/app/productos/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {
  @Input() product: Product;
  @Input() search: string;
  faEdit=faEdit;
  faSearch=faSearch;
  faTrash=faTrash;
  hide=false;
  hideALL=false;
  isChecked=false;
  private subscript: Subscription;
  constructor(private route: ActivatedRoute, private service:ProductsService) { 
  
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(this.search )
    let searchbool = !(this.product.nombre.includes(this.search) || this.search === "")
    this.hideALL= searchbool;
  }
  
  borrar(){

  }
  ngOnInit(): void {
    
    this.isChecked=this.product.monitorear
    let url =this.route.snapshot.routeConfig.path;
    this.hide = (url==='monitoreo' ? true:false) 
    this.hideALL = (this.hide && !this.product.monitorear)
  }
  checkValue(event: any){
    this.product.monitorear=event;
    this.service.products[this.product.uid-1]=this.product;
 }

}
