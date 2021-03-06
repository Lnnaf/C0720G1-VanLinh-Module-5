import {Component, OnInit, ViewChild} from '@angular/core';
import {IStudent} from "../student-managerment/IStudent";
import {StudentService} from "./student.service";
import {FormEditComponent} from "../form-edit/form-edit.component";
import {Router} from "@angular/router";

@Component({
    selector: 'app-student-list',
    templateUrl: 'student-list.component.html',
    styles: []
})
export class StudentListComponent implements OnInit {
    students: IStudent[];
    studentDetail: IStudent;
    @ViewChild(FormEditComponent) formEdit: FormEditComponent;

    constructor(public  studentService: StudentService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.studentService.getAll().subscribe((data: IStudent[]) => {
            this.students = data;
        })
    }

    getDetail(student: IStudent) {
        this.studentDetail = student;
    }

    edit(student: IStudent) {
        console.log('parent' + student.id);
        this.formEdit.getDataFromList(student);
    }

    delete(student: IStudent) {
        if (confirm('Are you sure for delete student: ' + student.name + '?')) {
            this.studentService.delete(student.id).subscribe(res => {
                alert('student: ' + student.name + ' was deleted!');
                this.ngOnInit()
            })
        } else {
            alert('You was cancel this action');
        }

    }
}
