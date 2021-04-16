import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {BookStoreService} from '../shared/services/book-store.service';
import {Book} from '../shared/models/book';



@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent implements OnInit {

  book$:Observable<string>;
 @Input() bookDetails$:Observable<Book>

  constructor(private activateRoute:ActivatedRoute,private http:BookStoreService) { }

  ngOnInit(): void {
   this.book$= this.activateRoute.paramMap.pipe(
      map(book => book.get('isbn')),
    )
   this.bookDetails$ = this.book$.pipe(
     switchMap((book) => this.http.getSingle(book).pipe(
         map((book) => book)
       ))
   )
  }



}
