import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Book} from '../shared/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()book: Book;
  @Output()rateUp = new EventEmitter<Book>();
  @Output()rateDown = new EventEmitter<Book>();
  constructor() { }

  ngOnInit(): void {
  }
  getRating(): any[]{
    return new Array(this.book.rating);
  }
  doRateUp() {
      this.rateUp.emit(this.book);
  }
  doRateDown() {
    this.rateDown.emit(this.book);
  }
}
