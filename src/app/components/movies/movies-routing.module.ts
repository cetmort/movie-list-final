import { NgModule } from '@angular/core';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { HorrorComponent } from './horror/horror.component';
import { HomeComponent } from './home/home.component';
import { ActionComponent } from './action/action.component';
import { MysteryComponent } from './mystery/mystery.component';

const routes: Routes =[
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'horror',
        component: HorrorComponent
      },
      {
        path: 'action',
        component: ActionComponent
      },
      {
        path: 'mystery',
        component: MysteryComponent
      }  
    ]
  }
] 

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class MoviesRoutingModule { }
