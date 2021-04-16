import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, concatMap, filter} from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as BookActions from './book.actions';
import {BookStoreService} from '../../shared/services/book-store.service';



@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(BookActions.loadBooks),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.http.getAll().pipe(
          map(data => BookActions.loadBooksSuccess({ data })),
          catchError(error => of(BookActions.loadBooksFailure({ error }))))
      )
    );
  });



  constructor(
    private actions$: Actions,
    private http:BookStoreService
  ) {}

}
