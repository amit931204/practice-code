import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  msgsendtochild ="parent to child data";
  @ViewChild(ChildComponent) child:any; //second way to send data

  child_data_res(){
    console.log('child', this.child.child_data);
  }
  get_child_data(value:any){
    console.log('data', value);
    
  }
  constructor() { }

  ngOnInit(): void {
    // console.log(this.child.child_data);
    // this.child.childtoparent();
  }
  ngAfterViewInit(){
    // console.log(this.child.child_data); 
    this.child.childtoparent();
  }

}
