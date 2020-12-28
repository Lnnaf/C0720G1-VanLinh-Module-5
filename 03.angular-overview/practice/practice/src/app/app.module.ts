import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import { CalculatorComponent } from './caculator/calculator.component';
import {FormsModule} from "@angular/forms";
import { StudentManagermentComponent } from './student-managerment/student-managerment.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    CalculatorComponent,
    StudentManagermentComponent,
    FontSizeComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
