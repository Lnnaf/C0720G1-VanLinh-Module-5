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
import { HackerNewsComponent } from './hacker-news/hacker-news.component';
import { LikesComponent } from './likes/likes.component';
import { NavbarComponent } from './hacker-news-update/navbar/navbar.component';
import { NfooterComponent } from './hacker-news-update/nfooter/nfooter.component';
import { BaseContentComponent } from './hacker-news-update/base-content/base-content.component';
import { StudentListComponent } from './student-list/student-list.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { TimerCountdownComponent } from './timer-countdown/timer-countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    CalculatorComponent,
    StudentManagermentComponent,
    FontSizeComponent,
    ColorPickerComponent,
    HackerNewsComponent,
    LikesComponent,
    NavbarComponent,
    NfooterComponent,
    BaseContentComponent,
    StudentListComponent,
    RatingBarComponent,
    TimerCountdownComponent
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
