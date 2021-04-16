import { Component, OnInit } from '@angular/core';
import {Book} from '../shared/models/book';
import {BookRatingService} from '../shared/services/book-rating.service';
import {Observable} from 'rxjs';
import {BookStoreService} from '../shared/services/book-store.service';
import {map,} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {loadBooks} from '../books/store/book.actions';
import {selectAllBooks} from '../books/store/book.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books$: Observable<Book[]> =this.bookStore.getAll();

  constructor(
    private bookRatingService:BookRatingService,
    private bookStore:BookStoreService,
    private store:Store
  ) { }

  ngOnInit(): void {
     // this.books$ = this.bookStore.getAll();
    //  wir machen jetzt eine Action:

    this.store.dispatch(loadBooks());
    this.books$=this.store.pipe(
      select(selectAllBooks))
  }
  public trackByItemId(index: number, item: Book): string{
    return item.isbn;
  }
  private updateList(book:Book):void {
    this.books$ =this.books$.pipe(
      map((items) => items.map(item=>book.isbn===item.isbn?book:item)));
  }
  rateUp(book:Book){
  const ratedBook:Book = this.bookRatingService.rateUp(book);
  this.updateList(ratedBook);
  }
  rateDown(book:Book){
    const ratedBook= this.bookRatingService.rateDown(book);
    this.updateList(ratedBook);
  }
}
