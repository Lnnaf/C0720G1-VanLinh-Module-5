import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../customer/customer.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer-service/customer.service';
import {MatSnackBar, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {MatSnackBarHorizontalPosition} from '@angular/material/snack-bar/snack-bar-config';
import * as moment from 'moment';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {
  regCustomerForm: FormGroup;
  constructor(private formBuild: FormBuilder,
              public customerService: CustomerService,
              private snackBar: MatSnackBar,
              private router: Router,
              public dialogRef: MatDialogRef<UpdateCustomerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }


  validation_messages = {
    'name': [
      {type: 'required', message: 'Name is required.'},
      {type: 'minlength', message: 'Name should has least 5 words.'},
      {type: 'maxlength', message: 'Name should has max 255 words.'},
    ],
    'date': [
      {type: 'required', message: 'Date is required.'},
      {type: 'c', message: 'Date is Min.'},
    ],
    'id_card': [
      {type: 'required', message: 'ID Card Required'},
      // {type: 'pattern', message: 'ID Card Should Has 9 numbers'},
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
        date: ['', [Validators.required]],
        id_card: ['', [Validators.required, Validators.pattern('\\d{9}')]],
        phone: ['', [Validators.required, Validators.pattern('(09|01[2|6|8|9]|08|84)+([0-9]{8,9})\\b')]],
        email: ['', [Validators.required, Validators.email]],
        address: ['', [Validators.required]],
        type: ['', [Validators.required]]
      }
    );
    this.regCustomerForm.setValue({
      id:this.data.id,
      name:this.data.name,
      date:this.data.date,
      id_card:this.data.id_card,
      phone:this.data.phone,
      email:this.data.email,
      address:this.data.address,
      type:this.data.type
    })
  }
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
      this.customerService.update(this.regCustomerForm.value.id,this.regCustomerForm.value).subscribe(res => {
        this.snackBar.open('Update success', 'Success', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          panelClass: 'snackbar-success',
          duration: 1500,
        });
      });
      this.dialogRef.close();
    }
  }
}
