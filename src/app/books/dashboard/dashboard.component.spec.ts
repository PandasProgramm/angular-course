import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {Book} from '../shared/models/book';
import {BookRatingService} from '../shared/services/book-rating.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let book:Book;
  let ratingMock:Partial<BookRatingService>;

  beforeEach(async () => {
    book={
      description: '',
      isbn: '',
      price: 30,
      rating: 3,
      title: ''
    };
    ratingMock={
      rateUp(book:Book){return book; }
    }

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        {
          //Stelle BRS zur Verfügung. Wenn jemand BRS anfordert, liefere Inhalt der Variable "ratingMock" aus

          provide:BookRatingService,
          useValue: ratingMock,
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call the service for rateUp()',()=>{
    //service ausmocken
    // Buch erstellen in declation
    const rs = TestBed.inject(BookRatingService);

    //Aufruf an das Objekt "rs" durchleiten, sonst blockiert der spy
    spyOn(rs,'rateUp').and.callThrough();

    //act

    component.rateUp(book);
    //assert
    expect(rs.rateUp).toHaveBeenCalled();
  });
});
