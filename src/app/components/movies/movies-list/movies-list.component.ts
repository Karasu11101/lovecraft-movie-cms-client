import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];

  currentPage: string;

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
