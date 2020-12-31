import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import {Customer} from './customer.model';
import {CustomerService} from '../customer-service/customer.service';
import {Router} from '@angular/router';
import {CreateCustomerComponent} from '../create-customer-dialog/create-customer.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-customer',
  templateUrl: 'customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  data: Customer[] = [];
  displayedColumns: string[] = ['position', 'name','date','id_card',
    'phone', 'email', 'address','type'];
   dataSource: MatTableDataSource<Customer>;
  private router: Router;

  constructor(private customerService: CustomerService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAll();
    console.log(this.dataSource)
  }

  getAll() {
    this.customerService.getAll().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource<Customer>(res);
    });
  };

  openDialog() {
    const dialogRef = this.dialog.open(CreateCustomerComponent, {
      width: '600px',

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
