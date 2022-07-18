import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productSelected:boolean = false; 
  selectedProduct!: string;

  onSelectProduct(product: string){
    this.productSelected=true;
    this.selectedProduct=product;
  }

}
