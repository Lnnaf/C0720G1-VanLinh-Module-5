import {AbstractControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import * as moment from 'moment';
import {F} from '@angular/cdk/keycodes';

const FORMAT_DATE = 'DD-MM-YYYY';
const currentYear = new Date().getFullYear();

export function minDateValidation(value: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    var yearValid = new Date(currentYear - value).getFullYear(); //2020-18=2002
    var dateGet = moment(control.value).format(FORMAT_DATE);
    var dateGetWithYear = new Date(dateGet).getFullYear();//1990
    if (yearValid <= dateGetWithYear) {//2002 <= 1990
      return {dateinvalid: true};
    }
  };
}


