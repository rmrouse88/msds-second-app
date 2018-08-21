import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormSubmissionService } from './reactive-form/form-submission.service';
import { PredictionCardComponent } from '../prediction-card/prediction-card.component';
import { NoLoanComponent } from '../no-loan/no-loan.component';
import { ResponseLoadingComponent } from '../response-loading/response-loading.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    SharedModule
  ],
  declarations: [ReactiveFormComponent, PredictionCardComponent, NoLoanComponent, ResponseLoadingComponent],
  providers: [FormSubmissionService]
})
export class FormControlModule { }
