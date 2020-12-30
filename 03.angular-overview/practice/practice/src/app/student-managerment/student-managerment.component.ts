import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from "./IStudent";

@Component({
  selector: 'app-student-managerment',
  templateUrl:'student-managerment.component.html',
  styleUrls:['student-managerment.component.css']
})
export class StudentManagermentComponent implements OnInit {
@Input() student:IStudent;
  constructor() { }

  ngOnInit(): void {
  }
setMark(value:number){
    this.student.mark = value;
}
}
