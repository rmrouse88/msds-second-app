import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from '../welcome/welcome.component';
import { ReactiveFormComponent } from '../form-control/reactive-form/reactive-form.component';

const routes:Routes = [
  {path: "", component: WelcomeComponent},
  {path: "reactive-form", component: ReactiveFormComponent},
  {path: "*", redirectTo: ""}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
