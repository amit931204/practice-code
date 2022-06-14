import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LayoutModule } from './layout/layout.module';

@Injectable({
  providedIn: LayoutModule
})
export class DesignutilityService {

  constructor() { }

  // userName = new Subject<any>()
  userName = new BehaviorSubject('Amit Chaurasiya')
}
