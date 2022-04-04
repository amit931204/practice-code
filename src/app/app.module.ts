import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyTask/todos/todos.component';
import { ParentComponent } from './data-transfer/parent/parent.component';
import { ChildComponent } from './data-transfer/child/child.component';
import { CustomStyleDirective } from './custom-style.directive';
import { Comp1Component } from './data-transfer/comp1/comp1.component';
import { Comp2Component } from './data-transfer/comp2/comp2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ParentComponent,
    ChildComponent,
    CustomStyleDirective,
    Comp1Component,
    Comp2Component,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
