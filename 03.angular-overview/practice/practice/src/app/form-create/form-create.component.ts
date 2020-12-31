import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../student-list/student.service";
import {IStudent} from "../student-managerment/IStudent";
import {Router} from "@angular/router";

@Component({
    selector: 'app-form-create',
    templateUrl: 'form-create.component.html',
    styles: []
})
export class FormCreateComponent implements OnInit {
    @Input() student2: IStudent;
    regStudentForm: FormGroup;

    constructor(private fb: FormBuilder,
                private router: Router,
                public studentService: StudentService) {
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

    redirectTo(uri: string) {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
            this.router.navigate([uri]));
    }
    onSubmit() {
        this.studentService.create(this.regStudentForm.value).subscribe(res => {
            alert("Created Success!");
            this.redirectTo('student-list');
        })
    }
}
