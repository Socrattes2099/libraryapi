import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckedOutBooksComponent } from './checked-out-books/checked-out-books.component';
import { LibraryMatModule } from '../library-mat.module';
import { CheckedOutRoutingModule } from './checked-out-routing.module';
import { CheckedOutBooksHistoryComponent } from './checked-out-history/checked-out-history.component';

@NgModule({
  declarations: [
    CheckedOutBooksComponent,
    CheckedOutBooksHistoryComponent,
  ],
  imports: [
    CommonModule,
    CheckedOutRoutingModule,
    LibraryMatModule
  ]
})
export class CheckedOutModule { }
