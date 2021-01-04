import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import {CreateCustomerComponent} from './customer-manangerment/create-customer-dialog/create-customer.component';
import {CustomerComponent} from './customer-manangerment/customer/customer.component';
import {ConfirmDeleteComponent} from './customer-manangerment/confirm-delete/confirm-delete.component';
import {CustomerDetailComponent} from './customer-manangerment/customer-detail/customer-detail.component';
import {UpdateCustomerComponent} from './customer-manangerment/update-customer/update-customer.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_DATE_FORMATS, MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatSortModule} from '@angular/material/sort';
import { ListEmployeeComponent } from './employee-manager/list-employee/list-employee.component';
import { DetailEmployeeComponent } from './employee-manager/detail-employee/detail-employee.component';
import { CreateEmployeeDiaglogComponent } from './employee-manager/create-employee-diaglog/create-employee-diaglog.component';
import { UpdateEmployeeComponent } from './employee-manager/update-employee/update-employee.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CreateCustomerComponent,
    ConfirmDeleteComponent,
    CustomerDetailComponent,
    UpdateCustomerComponent,
    ListEmployeeComponent,
    DetailEmployeeComponent,
    CreateEmployeeDiaglogComponent,
    UpdateEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    MatSortModule
  ],
  providers: [MatNativeDateModule,{
    provide:MAT_DATE_FORMATS,

    useValue:{
      parse: {
        dateInput: 'LL',
      },
      display: {
        dateInput: 'MM-DD-YYYY',
        monthYearLabel: 'YYYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel:  'YYYY',
      },
    },
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
