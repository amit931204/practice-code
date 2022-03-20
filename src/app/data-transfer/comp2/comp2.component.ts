import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from 'src/app/designutility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private designService: DesignutilityService) {
    this.designService.userName.subscribe(uname=>{
      this.userName = uname
    })
  }

  ngOnInit(): void {
  }
  userName:any;
  updateUserName(uname: { value: string; }){
    // this.userName = uname.value
    this.designService.userName.next(uname.value)
  }

}
