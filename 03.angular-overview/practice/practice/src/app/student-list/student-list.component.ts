import { Component, OnInit } from '@angular/core';
import {IStudent} from "../student-managerment/IStudent";

@Component({
  selector: 'app-student-list',
  templateUrl:'student-list.component.html',
  styles: [
  ]
})
export class StudentListComponent implements OnInit {
students:IStudent[]=[
  {
    id:1,
    name:"Name1",
    age:18,
    address:"212",
    mark:6
  },
  {
    id:2,
    name:"Name2",
    age:18,
    address:"212",
    mark:4
  },
  {
    id:3,
    name:"Name3",
    age:18,
    address:"212",
    mark:10
  },
];
  constructor() { }

  ngOnInit(): void {
  }
studentDetail:IStudent;
  getDetail(student: IStudent) {
    this.studentDetail = student;
  }
}
