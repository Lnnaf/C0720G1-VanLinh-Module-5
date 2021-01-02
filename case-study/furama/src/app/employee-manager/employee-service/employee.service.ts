import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Customer} from '../../customer-manangerment/customer/customer.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IEmployee} from '../model/IEmployee';
import {catchError} from 'rxjs/operators';
const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
};
let apiUrlCustomer = 'http://localhost:3000/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient,) { }
  //Get Data------------------------------------------
  getAll():Observable<IEmployee[]>{
    return this.httpClient.get<IEmployee[]>(apiUrlCustomer).pipe()
  };

  //Create----------------------------------------
  create(employee): Observable<IEmployee> {
    return this.httpClient.post<IEmployee>(apiUrlCustomer , JSON.stringify(employee), httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  };

  //update-------------------------------------
  update(id, employee): Observable<IEmployee> {
    return this.httpClient.put<IEmployee>(apiUrlCustomer + '/' + id, JSON.stringify(employee), httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  };

  //delete----------------------------------------
  delete(id){
    return this.httpClient.delete<IEmployee>(apiUrlCustomer + '/' + id, httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  };

  //error handler-------------------------------------
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error---------------------------
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
