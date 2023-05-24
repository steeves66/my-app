import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=bfa4d14f82ba33f4fbe5e2cdf0f1a990')
  }
}
 