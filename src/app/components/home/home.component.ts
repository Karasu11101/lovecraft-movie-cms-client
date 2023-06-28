import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { take, first } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  movies: Movie[];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.onGetRecipes();
  }

  onGetRecipes() {
    this.moviesService.getMovies().pipe(
      first()
    ).subscribe({
      next: (res) => {
        this.movies = res;
        this.movies = this.movies.slice(-4).reverse();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
}
