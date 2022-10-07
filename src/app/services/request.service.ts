import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  getMoviesGenres(idGenres:number){
    console.log();
    return this.httpClient.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${idGenres}&api_key=935cd375a182c346c1b3bf9134af5149&language=es-Es`).pipe(
      map ((resp: any) => {
        return resp;
      })
    )
  }

  getMoviesPopular(){
    console.log();
    return this.httpClient.get('https://api.themoviedb.org/3/trending/all/day?api_key=cf3eb7692b91ccc3a9311e96ce7a5987&language=es-Es').pipe(
      map ((resp: any) => {
        return resp;
      })
    )
  }
}
