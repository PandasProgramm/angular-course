import { Component, OnInit } from '@angular/core';
import {Book} from '../shared/models/book';
import {BookRatingService} from '../shared/services/book-rating.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book[];
  constructor(private bookRatingService:BookRatingService) { }

  ngOnInit(): void {

    this.books = [
      {
        isbn: `123`,
        title: 'Mein Buch',
        description: 'Eine Beschreibung',
        rating: 2,
        price: 32.9,
      },
      {
        isbn: '234',
        title: 'Mein Buch 2',
        description: 'Eine Beschreibung dieses Buches',
        rating: 3,
        price: 12.33
      },
      {
        isbn: '345',
        title: 'Ein anderes Buch',
        description: 'schöne Beschreibungen gibt es',
        rating: 5,
        price: 11.33
      },
      {
        isbn: '456',
        title: 'neues Buch',
        description: 'Eine Beschreibung dieses Buches',
        rating: 4,
        price: 22.33
      },
    ];
  }
  public trackByItemId(index: number, item: Book): string{
    return item.isbn;
  }
  private updateList(book:Book):void {
    this.books = this.books.map(item => book.isbn === item.isbn ? book : item);
  }

  rateUp(book:Book){
  const ratedBook=this.bookRatingService.rateUp(book);
  this.updateList(ratedBook);
  }
  rateDown(book:Book){
    const ratedBook= this.bookRatingService.rateDown(book);
    this.updateList(ratedBook);
  }

}
