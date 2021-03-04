import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BookComponent} from './book/book.component';
import {booksrouting} from './Booksrouting';



@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    booksrouting
  ]
})
export class BooksModule { }
