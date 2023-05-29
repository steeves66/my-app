import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MovieDto } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string = 'https://api.themoviedb.org/3'
  apiKey: string = 'bfa4d14f82ba33f4fbe5e2cdf0f1a990'

  constructor(private http: HttpClient) { }

  getMovies(type: string = 'upcoming', count: number = 12){
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(switchMap(res => {
      return of(res.results.slice(0, count))
    }))
  }
} 