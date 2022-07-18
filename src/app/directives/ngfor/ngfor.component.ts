import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productsName : boolean=true;

  products:any=[
  {name: "Mobile"},
  {name: "Laptop"},
  {name: "TV"},
  {name: "Washing Machine"}
 ]

//  Use of ng-template below
 amit:any=[]

}
