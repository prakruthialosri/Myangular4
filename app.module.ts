import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EmployeeComponent } from "./Employee/employee.component";
import { FormsModule} from '@angular/forms';

import {EmployeeListComponent} from './Employee/employee-list.component';
import {EmployeeTitlePipe} from './Employee/employee-list.pipe'
import {EmployeeCountComponent} from './Employee/employee-count.component'


@NgModule({
  declarations: [AppComponent, EmployeeComponent,EmployeeListComponent,EmployeeTitlePipe
  ,EmployeeCountComponent],
  imports: [BrowserModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
