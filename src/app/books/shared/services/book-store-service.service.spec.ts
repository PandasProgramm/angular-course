import { TestBed } from '@angular/core/testing';

import { BookStoreService } from './book-store.service';

describe('BookStoreServiceService', () => {
  let service: BookStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
