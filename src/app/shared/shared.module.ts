import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoadSpinnerComponent } from '../load-spinner/load-spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HttpClientModule],
  declarations: [LoadSpinnerComponent]
})
export class SharedModule { }
