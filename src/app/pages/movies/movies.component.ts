import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit{
  movies: Movie[] = []

  first: number = 0;
  rows: number = 6;
  totalRecords : number = 770405

  constructor(private moviesService: MoviesService){
  }

  ngOnInit(): void {
    this.getPageMovies(1)
  }

  getPageMovies(page: number){
    this.moviesService.searchMovies(page).subscribe(movies => {
      this.movies = movies
    })
  }

  onPageChange(event: any) {
    this.getPageMovies(event.page + 1)
  }
}