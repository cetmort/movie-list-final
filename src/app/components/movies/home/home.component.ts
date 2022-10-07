import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestService } from 'src/app/services/request.service';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any[] = [];

  constructor(public requestService: RequestService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.requestService.getMoviesPopular().subscribe({
      next: resp => {
        this.movies = resp.results;
      }
    })
  }

  openDialog(movie: any[]): void {
    this.dialog.open(DialogComponent, {data: movie});    
  }

}
