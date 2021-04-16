import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBook from './book.reducer';

export const selectBookState = createFeatureSelector<fromBook.State>(
  fromBook.bookFeatureKey
);

export const selectBookLoading=  createSelector( selectBookState, (state) => state.loading);
export const selectAllBooks =    createSelector( selectBookState,state => state.books)
