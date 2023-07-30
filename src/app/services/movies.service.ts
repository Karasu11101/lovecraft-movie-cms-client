import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MOVIES } from '../mocks/movies.mock';
import { Observable, of, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiBaseUrl = '/lovecraft/movies';
  movieData = new ReplaySubject();

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    // return of (MOVIES);
    return this.http.get<Movie[]>(`${this.apiBaseUrl}/list`)
  }

  getMoviesAsync() {
    // return of (MOVIES);
    return this.http.get<Movie[]>(`${this.apiBaseUrl}/list`)
  }

  getMovie(id: Number): Observable<Movie> {
    // const movie = MOVIES.find(movie => movie._id === Number(id));
    // return of (movie);
    return this.http.get<Movie>(`${this.apiBaseUrl}/details/${id}`)
  }

  createMovie(movie: Movie): Observable<Movie> {
    // MOVIES.push(movie);
    // return of (MOVIES);
    return this.http.post<Movie>(`${this.apiBaseUrl}/newMovie`, movie);
  }

  // getMovies(): Observable<Movie[]> {
  //   return of (MOVIES);
  // }

  // getMovie(id: number): Observable<Movie> {
  //   const movie = MOVIES.find(movie => movie._id === id);
  //   return of (movie);
  // }
}
