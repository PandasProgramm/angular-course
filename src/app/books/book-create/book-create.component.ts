import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../shared/models/book';
import {BookStoreService} from '../shared/services/book-store.service';
import {Router} from '@angular/router';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  @Input()book:Book

  constructor(private httpService:BookStoreService,private router:Router) { }

  ngOnInit(): void {
  }

  createBook(book: Book):void{
    this.httpService.create(book).subscribe(
      ()=> this.router.navigate(['/books',book.isbn]),
      ()=> throwError("")
    );

  }
}
