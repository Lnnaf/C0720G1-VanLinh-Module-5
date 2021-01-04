import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
import {CreateCustomerComponent} from '../../customer-manangerment/create-customer-dialog/create-customer.component';
import {CreateEmployeeDiaglogComponent} from '../create-employee-diaglog/create-employee-diaglog.component';
import {ConfirmDeleteComponent} from '../../customer-manangerment/confirm-delete/confirm-delete.component';
import {UpdateEmployeeComponent} from '../update-employee/update-employee.component';

export interface DialogData {
  id: number;
  name: string,
  position: string,
  education: string,
  department: string,
  date: string,
  id_card: string,
  salary: number,
  phone: string,
  email: string,
  address: string,
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
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private employeeService: EmployeeService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  refresh() {
    this.getAll();
    this.dataSource.data = this.dataSource.data;
  }

  detail(employee: IEmployee) {
    const dialogRef = this.dialog.open(DetailEmployeeComponent, {
      data: {
        id: employee.id,
        name: employee.name,
        date: employee.date,
        id_card: employee.id_card,
        phone: employee.phone,
        address: employee.address,
        email: employee.email,
        position: employee.position,
        education: employee.education,
        department: employee.department,
        salary: employee.salary
      },
    });
  }

  getAll() {
    this.employeeService.getAll().subscribe((res) => {
      this.dataSource = new MatTableDataSource<IEmployee>(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource);
    });
  }

  delete(employee: IEmployee) {
    const dialogConfirm = this.dialog.open(ConfirmDeleteComponent, {
      data: {
        id: employee.id,
        name: employee.name
      },
    });
    dialogConfirm.afterClosed().subscribe(res => {
      if (res == true) {
        console.log('deleted!');
        this.employeeService.delete(employee.id).subscribe(res => {
          if (res == null) {
            this.snackBar.open('Delete Failed', 'Failed', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 1500,
              panelClass: 'snackbar-failed'
            });
          } else {
            this.snackBar.open('Deleted Success', 'Success', {
              panelClass: 'snackbar-success',
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 1500,
            });
            this.refresh();
          }
        });
      } else {
        this.snackBar.open('Your Action Was Cancel', 'Failed', {
          panelClass: 'snackbar-failed',
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 1500,
        });
      }
    });
  }

  edit(employee: IEmployee) {
    const dialogRef = this.dialog.open(UpdateEmployeeComponent, {
      width: '700px',
      data: {
        id: employee.id,
        name: employee.name,
        position: employee.position,
        education: employee.education,
        department: employee.department,
        date: employee.date,
        id_card: employee.id_card,
        phone: employee.phone,
        address: employee.address,
        email: employee.email,
        salary: employee.salary
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      this.ngOnInit();
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateEmployeeDiaglogComponent, {
      width: '700px',
    });
    dialogRef.afterClosed().subscribe(res => {
      this.ngOnInit();
    })

    ;
  }

  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };


}
