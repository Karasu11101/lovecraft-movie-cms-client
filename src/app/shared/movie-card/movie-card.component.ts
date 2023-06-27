import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movies: Movie[];

  accorciaTesto(descrizione: string): number {
    let lunghezzaMassima = 180;
    if(descrizione.length <= lunghezzaMassima) {
      return lunghezzaMassima;
    } else {
      let ultimoSpazio = descrizione.lastIndexOf(' ', lunghezzaMassima);
      return ultimoSpazio;
    }
  }
}
