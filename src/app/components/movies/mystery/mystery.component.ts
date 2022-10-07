import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { RequestService } from 'src/app/services/request.service';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-mystery',
  templateUrl: './mystery.component.html',
  styleUrls: ['./mystery.component.scss']
})
export class MysteryComponent implements OnInit {
  public idGenres:number = 9648;
  public movies: any[] = [];

  constructor(public requestService: RequestService, public dialog: MatDialog) { }

  ngOnInit(): void {
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
