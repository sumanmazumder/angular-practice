import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component01Component } from './component01/component01.component';
import { Component02Component } from './component02/component02.component';
import { Component03Component } from './component03/component03.component';
const routes: Routes = [
  {path: '', redirectTo: 'component01', pathMatch: 'full'},
  {path: 'component01', component: Component01Component},
  {path: 'component02', component: Component02Component},
  {path: 'component03', component: Component03Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
