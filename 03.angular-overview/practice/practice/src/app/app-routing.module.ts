import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PetComponent} from "./pet/pet.component";
import {CalculatorComponent} from "./caculator/calculator.component";
import {StudentManagermentComponent} from "./student-managerment/student-managerment.component";
import {FontSizeComponent} from "./font-size/font-size.component";
import {ColorPickerComponent} from "./color-picker/color-picker.component";


const routes: Routes = [
  {path: 'pet', component: PetComponent },
  {path: 'color-picker', component: ColorPickerComponent },
  {path: 'calculator', component: CalculatorComponent },
  {path: 'student', component: StudentManagermentComponent },
  {path: 'font-size', component: FontSizeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
