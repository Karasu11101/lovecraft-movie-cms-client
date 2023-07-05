import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movies: Movie[];
  page = 1;
  moviesPerPage = 4;

  @Input() currentPage: string;

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
