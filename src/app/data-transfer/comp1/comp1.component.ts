import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from 'src/app/designutility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private designService: DesignutilityService) {
    this.designService.userName.subscribe(uname=>{
      this.userName = uname
    })
  }
  ngOnInit(): void {
  }
  userName:any;
  updateUserName(uname: any){
    this.designService.userName.next(uname.value)
  }
}
