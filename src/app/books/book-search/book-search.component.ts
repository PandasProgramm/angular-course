import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {BookStoreService} from '../shared/services/book-store.service';
import {debounceTime, filter, switchMap} from 'rxjs/operators';
import {Book} from '../shared/models/book';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  searchControl: FormControl;
  valueChanges$:Observable<Book[]>
  constructor(private http:BookStoreService) { }

  ngOnInit(): void {
    this.searchControl= new FormControl('');
    this.valueChanges$=this.searchControl.valueChanges.pipe(
      debounceTime(100),
        filter((source:string) => source.length>2),
         switchMap((input:string) => this.http.search(input)),
    )
  }

}
