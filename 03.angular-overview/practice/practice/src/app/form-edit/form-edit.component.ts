import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {StudentService} from "../student-list/student.service";
import {IStudent} from "../student-managerment/IStudent";
import {StudentListComponent} from "../student-list/student-list.component";
import {FormCreateComponent} from "../form-create/form-create.component";

@Component({
    selector: 'app-form-edit',
    templateUrl: 'form-edit.component.html',
    styles: []
})
export class FormEditComponent implements OnInit {
    regStudentForm: FormGroup;

    constructor(private fb: FormBuilder,
                private router: Router,
                public studentService: StudentService,
                private studentList:StudentListComponent,) {
    }

    ngOnInit(): void {
        this.regStudentForm = this.fb.group({
            id: [''],
            name: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(5)]],
            address: ['', Validators.required],
            age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
            mark: ['']
        });
    }

    getDataFromList(student: IStudent) {
        this.regStudentForm.setValue({
            id: student.id,
            name: student.name,
            address: student.address,
            age: student.age,
            mark: student.mark
        })
    }

    // redirectTo(uri: string) {
    //     this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    //         this.router.navigate([uri]));
    // }

    onSubmit() {
        this.studentService.update(this.regStudentForm.value.id, this.regStudentForm.value).subscribe(res => {
            alert('Updated Success!!');
         this.studentList.ngOnInit();
        })
    }
}
