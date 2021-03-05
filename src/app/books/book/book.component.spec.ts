import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookComponent } from './book.component';
import {Book} from '../shared/models/book';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component= fixture.componentInstance;
    component.book={
      description: 'ein Test', isbn: '123', price: 10, rating: 3, title: 'Der Test!'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit event for doRateUp()',()=>{

    let emittedBook:Book;
    component.rateUp.subscribe(
      (book)=>{
        emittedBook=book
        component.doRateUp();
        expect(emittedBook).toBeTruthy();
        expect(emittedBook).toBe(component.book);
      });

  });
  it('should emit event for doRateDown()',()=>{
    let emittedBook:Book;
    component.rateDown.subscribe(book=>{
      emittedBook=book;
      component.doRateDown();
      expect(emittedBook).toBeTruthy();
      expect(emittedBook).toBe(component.book);
    });
  });
});
