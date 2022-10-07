import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { HomeComponent } from './components/movies/home/home.component';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () => import('./components/movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
