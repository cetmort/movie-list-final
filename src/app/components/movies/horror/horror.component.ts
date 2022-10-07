import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestService } from 'src/app/services/request.service';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.scss']
})
export class HorrorComponent implements OnInit {
  public idGenres:number = 27;
  movies: any[] = [];

  constructor(public requestService: RequestService, public dialog: MatDialog){}

  ngOnInit (){
    this.requestService.getMoviesGenres(this.idGenres).subscribe({
      next: resp => {
        this.movies = resp.results;
      }
    })
  }

  openDialog(movie: any[]): void {
    this.dialog.open(DialogComponent, {data: movie});    
  }

}