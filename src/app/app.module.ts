import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyTask/todos/todos.component';
import { ParentComponent } from './data-transfer/parent/parent.component';
import { ChildComponent } from './data-transfer/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
