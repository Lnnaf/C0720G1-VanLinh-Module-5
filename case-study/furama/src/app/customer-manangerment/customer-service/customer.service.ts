import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';
import {Customer} from '../customer/customer.model';
import {catchError} from 'rxjs/operators';
import {CustomerComponent} from '../customer/customer.component';
const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
};
let apiUrlCustomer = 'http://localhost:3000/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient,
             ) { }
  getAll():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(apiUrlCustomer).pipe()
  }
  //add----------------------------------
  create(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(apiUrlCustomer , JSON.stringify(customer), httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  };
  //update-------------------------------------
  update(id, customer): Observable<Customer> {
    return this.httpClient.put<Customer>(apiUrlCustomer + '/' + id, JSON.stringify(customer), httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  //delete--------------------------------------------------
  delete(id){
    return this.httpClient.delete<Customer>(apiUrlCustomer + '/' + id, httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //error handler---------------------------------
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
