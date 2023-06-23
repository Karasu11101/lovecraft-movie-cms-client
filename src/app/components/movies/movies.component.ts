import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MOVIES } from 'src/app/mocks/movies.mock';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  movies: Movie[];

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {
    this.onGetMovies();
  }

  onGetMovies() {
    this.moviesService.getMovies().subscribe({
      next: (res) => {
        this.movies = res;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
}
