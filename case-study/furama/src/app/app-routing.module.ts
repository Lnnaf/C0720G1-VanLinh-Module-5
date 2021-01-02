import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './customer-manangerment/customer/customer.component';
import {ListEmployeeComponent} from './employee-manager/list-employee/list-employee.component';



const routes: Routes = [
  { path: 'customer', component: CustomerComponent},
  { path: 'employee', component: ListEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
