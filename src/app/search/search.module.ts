import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-router.module';
// search module
import { SearchPipe } from '../search.pipe';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [SearchComponent, SearchPipe],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule
  ],
})
export class SearchModule { }
