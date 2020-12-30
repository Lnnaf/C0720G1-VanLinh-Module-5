import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PetComponent} from "./pet/pet.component";
import {CalculatorComponent} from "./caculator/calculator.component";
import {StudentManagermentComponent} from "./student-managerment/student-managerment.component";
import {FontSizeComponent} from "./font-size/font-size.component";
import {ColorPickerComponent} from "./color-picker/color-picker.component";
import {HackerNewsComponent} from "./hacker-news/hacker-news.component";
import {BaseContentComponent} from "./hacker-news-update/base-content/base-content.component";
import {StudentListComponent} from "./student-list/student-list.component";
import {RatingBarComponent} from "./rating-bar/rating-bar.component";
import {TimerCountdownComponent} from "./timer-countdown/timer-countdown.component";


const routes: Routes = [
  {path: 'pet', component: PetComponent },
  {path: 'color-picker', component: ColorPickerComponent },
  {path: 'calculator', component: CalculatorComponent },
  {path: 'student', component: StudentManagermentComponent },
  {path: 'font-size', component: FontSizeComponent },
  {path: 'hacker-news', component: HackerNewsComponent },
  {path: 'hacker-news-update', component: BaseContentComponent },
  {path: 'student-list', component: StudentListComponent },
  {path: 'rating-bar', component: RatingBarComponent },
  {path: 'timer', component: TimerCountdownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
