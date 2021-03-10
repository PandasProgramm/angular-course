import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BookComponent} from './book/book.component';
import {booksRouting} from './BooksRouting';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookSearchComponent } from './book-search/book-search.component';
import {ReactiveFormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './books/store/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './books/store/book.effects';




@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BooksDetailsComponent,
    BookCreateComponent,
    BookFormComponent,
    BookSearchComponent,

  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    booksRouting,
    ReactiveFormsModule,
    StoreModule.forFeature(fromBook.bookFeatureKey, fromBook.reducer),
    EffectsModule.forFeature([BookEffects])
  ]
})
export class BooksModule { }
