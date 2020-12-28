import { Component, OnInit } from '@angular/core';
import {IStudent} from "./IStudent";

@Component({
  selector: 'app-student-managerment',
  templateUrl:'student-managerment.component.html',
  styles: [
  ]
})
export class StudentManagermentComponent implements OnInit {
student:IStudent={
  id:1,
  name:"Linh",
  address:'danang',
  age:18,
  mark:2
};
  constructor() { }

  ngOnInit(): void {
  }
setMark(value:number){
    this.student.mark = value;
}
}
