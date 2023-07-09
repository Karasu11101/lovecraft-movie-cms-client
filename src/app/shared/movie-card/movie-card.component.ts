import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movies: Movie[];
  @Input() currentPage: string;

  page = 1;
  moviesPerPage = 4;

  movies$ = this.moviesService.getMoviesAsync();

  role: any;
  extractedRole = this.userService.userRole.subscribe(res => this.role = res);

  constructor(private moviesService: MoviesService, private userService: UserService) {}

  accorciaTesto(descrizione: string): number {
    let lunghezzaMassima = 180;
    if(descrizione.length <= lunghezzaMassima) {
      return lunghezzaMassima;
    } else {
      let ultimoSpazio = descrizione.lastIndexOf(' ', lunghezzaMassima);
      return ultimoSpazio;
    }
  }

  accorciaTitolo(titolo: string): number {
    let lunghezzaMassima = 18;
    if(titolo.length <= lunghezzaMassima) {
      return lunghezzaMassima;
    } else {
      let ultimoSpazio = titolo.lastIndexOf(' ', lunghezzaMassima);
      return ultimoSpazio;
    }
  }

  paginate(e) {
    e.page = e.page + 1;
    this.page = e.page;
  }

}
