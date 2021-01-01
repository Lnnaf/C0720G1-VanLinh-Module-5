import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import {Customer} from './customer.model';
import {CustomerService} from '../customer-service/customer.service';
import {Router} from '@angular/router';
import {CreateCustomerComponent} from '../create-customer-dialog/create-customer.component';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDeleteComponent} from '../confirm-delete/confirm-delete.component';
import {MatSnackBar, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {MatSnackBarHorizontalPosition} from '@angular/material/snack-bar/snack-bar-config';
import {CustomerDetailComponent} from '../customer-detail/customer-detail.component';
import {UpdateCustomerComponent} from '../update-customer/update-customer.component';

export interface DialogData {
  id: number;
  name: string;
  date:string,
  id_card:string,
  phone:string,
  email:string,
  address:string,
  type:string,
}

@Component({
  selector: 'app-customer',
  templateUrl: 'customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  data: Customer[] = [];
  displayedColumns: string[] = ['position', 'name', 'date', 'id_card',
    'phone', 'email', 'address', 'type', 'action'];
  dataSource: MatTableDataSource<Customer>;
  private router: Router;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private customerService: CustomerService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getAll();
    console.log(this.dataSource);
  }

  getAll() {
    this.customerService.getAll().subscribe((data: Customer[]) => {
      this.dataSource = new MatTableDataSource<Customer>(data);
    });
  };

  openDialog() {
    const dialogRef = this.dialog.open(CreateCustomerComponent, {
      width: '600px',

    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAll();
    });
  }

  delete(customer: Customer) {
    const dialogConfirm = this.dialog.open(ConfirmDeleteComponent, {
      data: {
        id: customer.id,
        name:customer.name
      },
    });
    dialogConfirm.afterClosed().subscribe(res => {
      if (res == true) {
        console.log('deleted!');
        this.customerService.delete(customer.id).subscribe(res => {
          if (res == null) {
            this.snackBar.open('Delete Failed', 'Failed', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 1500,
              panelClass: 'snackbar-failed'
            });
          }else {
            this.snackBar.open('Deleted Success','Success',{
              panelClass:'snackbar-success',
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 1500,
            })
          }
        });
      } else {
        this.snackBar.open('Your Action Was Cancel','Failed',{
          panelClass:'snackbar-failed',
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 1500,
        })
      }
    });

  }

  detail(customer: Customer) {
    const dialogRef = this.dialog.open(CustomerDetailComponent, {
      data: {
        id: customer.id,
        name:customer.name,
        date:customer.date,
        id_card:customer.id_card,
        phone:customer.phone,
        address:customer.address,
        email:customer.email,
        type:customer.type
      },
    });
  }

  edit(customer: Customer) {
    const dialogRef = this.dialog.open(UpdateCustomerComponent, {
      data: {
        id: customer.id,
        name:customer.name,
        date:customer.date,
        id_card:customer.id_card,
        phone:customer.phone,
        address:customer.address,
        email:customer.email,
        type:customer.type
      },
    });
  }
}
