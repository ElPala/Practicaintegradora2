import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.scss']
})
export class ProductMainComponent implements OnInit {
  search=''
  onSearchChange(searchValue: string): void {  
    this.search=searchValue;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
