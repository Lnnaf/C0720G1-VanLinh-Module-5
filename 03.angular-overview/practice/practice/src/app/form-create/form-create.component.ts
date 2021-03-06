import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../student-list/student.service";
import {IStudent} from "../student-managerment/IStudent";
import {Router} from "@angular/router";
import {StudentListComponent} from "../student-list/student-list.component";

@Component({
    selector: 'app-form-create',
    templateUrl: 'form-create.component.html',
    styles: []
})
export class FormCreateComponent implements OnInit {
    @Input() student2: IStudent;
    regStudentForm: FormGroup;
    validation_messages = {
        'name': [
            { type: 'required', message: 'Name is required.' },
            { type: 'minlength', message: 'Name should has least 5 words.' },
            { type: 'maxlength', message: 'Name should has max 255 words.' },
        ],
        'address':[
            { type: 'required',message:'Address is required'}
        ],
        'age':[
            { type: 'required',message:'Age is required'},
            { type: 'min',message:'Min Age is 18 year old'},
            { type: 'max',message:'Max Age is 120 year old'},
        ],
    };

    constructor(private fb: FormBuilder,
                private router: Router,
                public studentService: StudentService,
                private studentList: StudentListComponent) {
    }

    ngOnInit(): void {
        this.regStudentForm = this.fb.group({
            id: [''],
            name: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(5)]],
            address: ['', Validators.required],
            age: ['', [Validators.required, Validators.min(18), Validators.max(120)]],
            mark: ['']
        });
    }

    redirectTo(uri: string) {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
            this.router.navigate([uri]));
    }
    onSubmit() {
        this.studentService.create(this.regStudentForm.value).subscribe(res => {
           this.studentList.ngOnInit();
        })
    }
}
