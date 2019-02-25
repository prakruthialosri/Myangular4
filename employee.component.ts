import { Component } from "@angular/core";

@Component({
  selector: "my-emp",
  templateUrl: "../Employee/employee.component.html",
  styleUrls: ["../Employee/employee.component.css"]
})
export class EmployeeComponent {
  EmployeeDeatails = "";
  imagepath: string = "Koala.jpg";
  img = "../../assets/Koala.jpg";
  prop: boolean = false;
  colspan: number = 3;
  classtoapply: string = "italicClass";
  colortoapply: boolean = false;
  boldtoplly: boolean = true;
  fontsize: number = 10;
  showdeatails: boolean = false;
  name: string = "Prakruthi";
  firstName: string = "PrakruthiAlosri";
  LastName: string = "as";
  gender: string = "female";
  age: number = 27;

  getFullname() {
    return this.firstName + this.LastName;
  }

  changethestyle() {
    let classes = { boldClass: this.boldtoplly, colorClass: this.colortoapply };
    return classes;
  }

  Onclick() {
    console.log("Hi");
  }

  toggel_deatails() {
    this.showdeatails = !this.showdeatails;
    console.log(this.showdeatails);
  }
}
