import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{ ReactiveFormRoutingModule } from './reactive-form-router.module';
import{ FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    FormComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    FormsModule, ReactiveFormsModule,
  ]
})
export class ReactiveFormModule { }
