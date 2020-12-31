import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer-service/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  regCustomerForm: FormGroup;

  constructor(private formBuild: FormBuilder,
              public customerService: CustomerService) {
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
      {type: 'required', message: 'Phone Required'}
    ],
    'email': [
      {type: 'required', message: 'Email Required'},
      {type: 'email', message: 'Email Wrong Format'},
    ],
    'address': [
      {type: 'required', message: 'Address Required'}
    ],
    'type':[
      {type: 'required', message: 'Type Member Required'}
    ]
  };

  ngOnInit(): void {
    this.regCustomerForm = this.formBuild.group({
        id: [''],
        name: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(5)]],
        date: ['', Validators.required],
        id_card: ['', [Validators.required, Validators.pattern('/^\\d{9}$/')]],
        phone: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        address: ['', [Validators.required]],
        type: ['',[Validators.required]]
      }
    );
  };

  onSubmit() {
    console.log(this.regCustomerForm.value);
  }
}
