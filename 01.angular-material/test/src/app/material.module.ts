import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  imports: [
    MatButtonModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatSlideToggleModule
  ],
  exports: [
    MatButtonModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatSlideToggleModule
  ],
  providers: [ MatDatepickerModule,MatButtonModule ],
})

export class MaterialModule {}
