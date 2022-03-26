import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() msgrecieveformparent:any;
  
  child_data: string='data child use of view child';
  @Output() senddata_fromchild =new EventEmitter();
  
  constructor() { }

  childtoparent(){
    this.senddata_fromchild.emit('Child date to parent')
  }
  ngOnInit(): void {
  }

}
