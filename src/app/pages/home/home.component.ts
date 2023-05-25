import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  movies: any = []

  constructor(private mooviesService: MoviesService){}

  ngOnInit(): void {
    this.mooviesService.getMovies().subscribe((response: any)=>{
      this.movies = response.results
      console.log(this.movies)
    })
  }
}
