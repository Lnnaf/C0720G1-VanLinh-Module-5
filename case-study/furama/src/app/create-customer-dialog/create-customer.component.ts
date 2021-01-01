import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer-service/customer.service';
import {MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarConfig} from '@angular/material/snack-bar';
import {MatSnackBarHorizontalPosition} from '@angular/material/snack-bar/snack-bar-config';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {CustomerComponent} from '../customer/customer.component';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  regCustomerForm: FormGroup;

  constructor(private formBuild: FormBuilder,
              public customerService: CustomerService,
              private snackBar: MatSnackBar,
              private router: Router,
              private dialogRef: MatDialogRef<CreateCustomerComponent>) {
  }

  validation_messages = {
    'name': [
      {type: 'required', message: 'Name is required.'},
      {type: 'minlength', message: 'Name should has least 5 words.'},
      {type: 'maxlength', message: 'Name should has max 255 words.'},
    ],
    'date': [
      {type: 'required', message: 'Date is required.'},
    ],
    'id_card': [
      {type: 'required', message: 'ID Card Required'},
      {type: 'pattern', message: 'ID Card Should Has 9 numbers'},
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
    'type': [
      {type: 'required', message: 'Type Member Required'}
    ]
  };

  ngOnInit(): void {
    this.regCustomerForm = this.formBuild.group({
        id: [''],
        name: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(5)]],
        date: ['', Validators.required],
        id_card: ['', [Validators.required, Validators.pattern('\\d{9}')]],
        phone: ['', [Validators.required, Validators.pattern('(09|01[2|6|8|9]|08|84)+([0-9]{8,9})\\b')]],
        email: ['', [Validators.required, Validators.email]],
        address: ['', [Validators.required]],
        type: ['', [Validators.required]]
      }
    );
  };


  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  onSubmit() {
    if (this.regCustomerForm.invalid) {
      this.snackBar.open('Form Field Required', 'Failed', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 1500,
        panelClass: 'snackbar-failed'
      });
    } else {
      this.customerService.create(this.regCustomerForm.value).subscribe(res => {
        this.snackBar.open('Form Submitted', 'Success', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          panelClass: 'snackbar-success'
        });
      });
      this.dialogRef.close();
    }
  }
}
