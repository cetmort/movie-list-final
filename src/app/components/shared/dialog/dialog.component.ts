import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log('Datos: ', this.data);
  }

  // Agregado elementos List en el localStorage
  addToList(data: any){
    let favoriteList= JSON.parse(localStorage.getItem('movie-list') ?? '[]');
    console.log('Info Data ', data);
    if(favoriteList.indexOf(data) == -1){
      favoriteList.push(data);
      console.log(JSON.stringify(favoriteList))
      localStorage.setItem("movie-list",JSON.stringify(favoriteList))
    } 
  }

  votar(data: any){
  }

}
