import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { take, first } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('modalRegistration', {static: false}) modal: ElementRef;

  name: string;
  username: string;
  surname: string;
  email: string;
  dateOfBirth: string;

  movies: Movie[];
  username: string;
  name: string;
  surname: string;
  email: string;


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
