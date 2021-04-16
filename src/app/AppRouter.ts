import {RouterModule, Routes} from '@angular/router';

const routes:Routes= [
  {
    path:'',
    redirectTo:'books',
    pathMatch:'full',
  },
  {
    path:'books',
    children: [
      {
        path:'',
        loadChildren: () => import('src/app/books/books.module').then( m => m.BooksModule ),
      }
    ]
  }
]
export const AppRoutes = RouterModule.forRoot(routes)
