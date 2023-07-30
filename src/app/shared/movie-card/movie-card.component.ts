import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MOVIES } from 'src/app/mocks/movies.mock';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movies: Movie[];
  @Input() currentPage: string;

  page = 1;
  moviesPerPage = 4;

  movies$ = this.moviesService.getMoviesAsync();

  role: any;
  extractedRole = this.userService.userRole.subscribe(res => this.role = res);

  constructor(private moviesService: MoviesService, private userService: UserService, private modal: NgbModal) {}

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('user')) !== null) {
      this.role = JSON.parse(localStorage.getItem('user')).role;
    } else {
      this.role = 'user';
    }
    console.log(localStorage);
  }

  ngDoCheck(): void {
    if(JSON.parse(localStorage.getItem('user')) !== null) {
      this.role = JSON.parse(localStorage.getItem('user')).role;
      console.log(this.role);
    } else {
      this.role = 'user';
    }
  }

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

  open(content: any, id: number) {
    this.modal.open(content, { ariaLabelledBy: 'delete movie modal', size: 'default', centered: true}).result.then((res) => {
        MOVIES.splice(id - 1, 1);
      })
    .catch((res) => {
      console.log('exiting modal');
    });
  }
}
