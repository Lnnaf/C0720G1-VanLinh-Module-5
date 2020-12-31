import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {IStudent} from "../student-managerment/IStudent";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiServer = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }

  create(student): Observable<IStudent> {
    return this.httpClient.post<IStudent>(this.apiServer + '/student/', JSON.stringify(student), this.httpOptions)
        .pipe(
            catchError(this.errorHandler)
        )
  }

  getAll(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>(this.apiServer + '/student/')
        .pipe(
            catchError(this.errorHandler)
        )
  }

  update(id, student): Observable<IStudent> {
    return this.httpClient.put<IStudent>(this.apiServer + '/student/' + id, JSON.stringify(student), this.httpOptions)
        .pipe(
            catchError(this.errorHandler)
        )
  }

  delete(id){
    return this.httpClient.delete<IStudent>(this.apiServer + '/student/' + id, this.httpOptions)
        .pipe(
            catchError(this.errorHandler)
        )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
