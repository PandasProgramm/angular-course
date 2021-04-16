import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {Book} from '../shared/models/book';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Output()bookToCreate= new EventEmitter<Book>()

  bookForm:FormGroup
  constructor() { }

  ngOnInit(): void {


    this.bookForm = new FormGroup({

      isbn : new FormControl('',
        [
          Validators.required,
        ]),
      title: new FormControl('',
          Validators.required,
        ),
      description: new FormControl(''),
      rating: new FormControl(1,
        [
        Validators.required,
        Validators.min(1),
        Validators.max(5)
      ]),
      price: new FormControl(0,[
        Validators.required,
        Validators.min(1)
      ]),
    })
  }
  submitForm() : void {
    const book = {...this.bookForm.value}
    this.bookToCreate.emit( book)
  }
  isInvalid(controlName:string):boolean{
    return  this.bookForm.get(controlName).valid&&this.bookForm.get(controlName).untouched;
  }
  hasError(controlName:string,errorCode:string):boolean{
   return this.bookForm.get(controlName).hasError(errorCode)&& this.bookForm.get(controlName).touched
  }
}
