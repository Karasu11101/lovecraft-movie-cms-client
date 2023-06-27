import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MOVIES } from '../mocks/movies.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies(): Observable<Movie[]> {
    return of (MOVIES);
  }

  getMovie(id: number): Observable<Movie> {
    const movie = MOVIES.find(movie => movie._id === id);
    return of (movie);
  }
}
