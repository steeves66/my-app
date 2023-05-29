import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import {Movie} from '../../models/movie'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  popularMovies: Movie[] = []
  upComingMovies: Movie[] = []
  topRatedMovies: Movie[] = []

  constructor(private mooviesService: MoviesService){}

  ngOnInit(): void {
    this.mooviesService.getMovies('popular').subscribe((response)=>{
      this.popularMovies = response.results
    })

    this.mooviesService.getMovies('upcoming').subscribe((response)=>{
      this.upComingMovies = response.results
    })

    this.mooviesService.getMovies('top_rated').subscribe((response)=>{
      this.topRatedMovies = response.results
    })
  }
}
