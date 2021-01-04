import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {EmployeeService} from '../employee-service/employee.service';
import {MatSnackBarHorizontalPosition} from '@angular/material/snack-bar/snack-bar-config';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-employee-diaglog',
  templateUrl: './create-employee-diaglog.component.html',
  styleUrls: ['./create-employee-diaglog.component.scss']
})
export class CreateEmployeeDiaglogComponent implements OnInit {
  regForm: FormGroup;
  minDate: Date;
  maxDate: Date;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private formBuild: FormBuilder,
              private snackBar: MatSnackBar,
              private employeeService:EmployeeService,
              private dialogRef: MatDialogRef<CreateEmployeeDiaglogComponent>,) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100, 0, 0);
    this.maxDate = new Date(currentYear - 18, 0, 0);
  }

  // message validate
  validation_messages = {
    'name': [
      {type: 'required', message: 'Name is required.'},
      {type: 'minlength', message: 'Name should has least 5 words.'},
      {type: 'maxlength', message: 'Name should has max 255 words.'},
    ],
    'position':[
      {type: 'required', message: 'Position is required.'},
    ],
    'education':[
      {type: 'required', message: 'Education is required.'},
    ],
    'department':[
      {type: 'required', message: 'Department is required.'},
    ],
    'date': [
      {type: 'required', message: 'Date is required.'},
      {type: 'c', message: 'Date is Min.'},
    ],
    'id_card': [
      {type: 'required', message: 'ID Card Required'},
      {type: 'pattern', message: 'ID Card Should Has 9 numbers'},
    ],
    'salary':[
      {type: 'required', message: 'Salary is required.'},
      {type: 'pattern', message: 'Salary should be a number and have 3 to 7 numbers'},
    ],
    'phone': [
      {type: 'required', message: 'Phone Required'},
      {type: 'pattern', message: 'Phone Should be start by 08,09,84,012,016,018,019'},
    ],
    'email': [
      {type: 'required', message: 'Email Required'},
      {type: 'email', message: 'Email Wrong Format'},
    ],
    'address': [
      {type: 'required', message: 'Address Required'}
    ],
  };

  ngOnInit(): void {
    this.regForm = this.formBuild.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      position:['',Validators.required],
      education:['',Validators.required],
      department:['',Validators.required],
      date:['',Validators.required],
      id_card:['',[Validators.required,Validators.pattern('\\d{9}')]],
      salary:['',[Validators.required,Validators.pattern('\\d{3,7}')]],
      phone: ['', [Validators.required, Validators.pattern('(09|01[2|6|8|9]|08|84)+([0-9]{8,9})\\b')]],
      email:['',[Validators.required,Validators.email]],
      address:['',Validators.required],
    });
  }

  onSubmit() {
    if (this.regForm.invalid) {
      this.snackBar.open('Form Field Required', 'Failed', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 1500,
        panelClass: 'snackbar-failed'
      });
    } else {
      this.employeeService.create(this.regForm.value).subscribe(res => {
        this.snackBar.open('Form Submitted', 'Success', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 1500,
          panelClass: 'snackbar-success'
        });
      });
      this.dialogRef.close();
    }
  }
}
