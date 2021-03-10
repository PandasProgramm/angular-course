import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BooksDetailsComponent} from './books-details/books-details.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookSearchComponent} from './book-search/book-search.component';


const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
  },
  {
    path:'create-book',
    component: BookCreateComponent
  },
  {
    path:'search',
    component:BookSearchComponent
  },
  {
    path:':isbn',
    component: BooksDetailsComponent,
  }
]
export const booksRouting = RouterModule.forChild(routes)
