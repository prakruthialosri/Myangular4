import { Component } from "@angular/core";

@Component({
  selector: "my-emplist",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["../Employee/employee-list.component.css"]
})
export class EmployeeListComponent {
  employee: any[] = [
    {
      code: "emp01",
      name: "prakruthi",
      gender: "female",
      annuasalary: "450000",
      dateofbirth: "02/11/1991"
    },
    {
      code: "emp02",
      name: "priya",
      gender: "female",
      annuasalary: "200000",
      dateofbirth: "11/11/1987"
    },
    {
      code: "emp03",
      name: "pramod",
      gender: "male",
      annuasalary: "450000",
      dateofbirth: "11/11/1991"
    },
    {
      code: "emp04",
      name: "pramodas",
      gender: "male",
      annuasalary: "4590000",
      dateofbirth: "11/12/1991"
    }
  ];

  gettotalnumner(): number {
    return this.employee.length;
  }

  gettotalmalenumner(): number {
    return this.employee.filter(e => e.gender === "male").length;
  }
  gettotalfemalenumner(): number {
    return this.employee.filter(e => e.gender === "female").length;
  }
}
