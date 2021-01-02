import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Customer} from '../../customer-manangerment/customer/customer.model';
import {IEmployee} from '../model/IEmployee';
import {EmployeeService} from '../employee-service/employee.service';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {MatSnackBarHorizontalPosition} from '@angular/material/snack-bar/snack-bar-config';
import {CustomerDetailComponent} from '../../customer-manangerment/customer-detail/customer-detail.component';
import {DetailEmployeeComponent} from '../detail-employee/detail-employee.component';

export interface DialogData {
  id: number;
  name: string,
  position:string,
  education:string,
  department:string,
  date:string,
  id_card:string,
  salary:number,
  phone:string,
  email:string,
  address:string,
}
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  dataSource: MatTableDataSource<IEmployee>;
  displayedColumns: string[] = ['position', 'name', 'date', 'id_card',
    'phone', 'email', 'address', 'type', 'action'];
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  constructor(private employeeService:EmployeeService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAll()
  }

  detail(employee: IEmployee) {
    const dialogRef = this.dialog.open(DetailEmployeeComponent, {
      data: {
        id: employee.id,
        name:employee.name,
        date:employee.date,
        id_card:employee.id_card,
        phone:employee.phone,
        address:employee.address,
        email:employee.email,
        position:employee.position,
        education:employee.education,
        department:employee.department,
       salary:employee.salary
      },
    });
  }
  getAll(){
    this.employeeService.getAll().subscribe(res =>{
      this.dataSource = new MatTableDataSource<IEmployee>(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource)
    })
  }

  delete(employee: IEmployee) {

  }

  edit(employee: IEmployee) {

  }

  openDialog() {

  }

  doFilter= (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
