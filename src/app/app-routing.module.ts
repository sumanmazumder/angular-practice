import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'subject', pathMatch: "full", },
  {path: 'subject', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule) },
  {path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
  {path: 'form', loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
