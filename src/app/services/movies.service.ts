import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MOVIES } from '../mocks/movies.mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiBaseUrl = 'api/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    // return of (MOVIES);
    return this.http.get<Movie[]>(`${this.apiBaseUrl}/`)
  }

  getMoviesAsync() {
    // return of (MOVIES);
    return this.http.get<Movie[]>(`${this.apiBaseUrl}/`)
  }

  getMovie(id: string): Observable<Movie> {
    // const Movie = MovieS.find(movie => movie._id === id);
    // return of (Movie);
    return this.http.get<Movie>(`${this.apiBaseUrl}/${id}`)
  }

  createMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.apiBaseUrl}/`, movie);
  }

  // getMovies(): Observable<Movie[]> {
  //   return of (MOVIES);
  // }

  // getMovie(id: number): Observable<Movie> {
  //   const movie = MOVIES.find(movie => movie._id === id);
  //   return of (movie);
  // }
}
