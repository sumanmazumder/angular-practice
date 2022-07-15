import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component01Component } from './component01/component01.component';
import { Component02Component } from './component02/component02.component';
import { Component03Component } from './component03/component03.component';
import { SubjectRoutingModule } from './subject-router.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Component01Component,
    Component02Component,
    Component03Component
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    FormsModule
  ]
})
export class SubjectModule { }
