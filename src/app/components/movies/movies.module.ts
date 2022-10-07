import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorrorComponent } from './horror/horror.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { HomeComponent } from './home/home.component';
import { ActionComponent } from './action/action.component';
import { MysteryComponent } from './mystery/mystery.component';



@NgModule({
  declarations: [
    HorrorComponent,
    HomeComponent,
    ActionComponent,
    MysteryComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
