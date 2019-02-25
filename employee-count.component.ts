import { Component, Input } from '@angular/core';
import { EmployeeComponent } from './employee.component';


@Component({
    selector:'my-count',
    templateUrl:'./employee-count.component.html',
    styleUrls:['./employee-count.component.css']
})

export class EmployeeCountComponent {
    
    @Input() 
all:number;

@Input() 
male:number;

@Input() 
female:number;

}

