import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../models/book';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private API_URL:string='https://api.angular.schule'

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.API_URL}/books`).pipe(shareReplay(1));
  }
  getSingle(isbn:string):Observable<Book>{
    return this.httpClient.get<Book>(`${this.API_URL}/book/${isbn}`)
  }
  create(book:Book):Observable<Book>{
    return this.httpClient.post<Book>(`${this.API_URL}/books`,book);
  }
  delete(book:Book):Observable<Book>{
    return this.httpClient.delete<Book>(`${this.API_URL}/books/${book.isbn}`)
  }
  search(term:string):Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.API_URL}/books/search/${term}`)
  }
}
