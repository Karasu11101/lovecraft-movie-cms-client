import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];
  role: any;

  constructor(private moviesService: MoviesService, private router: Router, public auth: AuthService, private userService: UserService) {}

  ngOnInit(): void {
    this.onGetMovies();
    this.role = JSON.parse(localStorage.getItem('user')).role;
    console.log(localStorage);
  }

  ngDoCheck(): void {
    if(JSON.parse(localStorage.getItem('user')) !== null) {
      this.role = JSON.parse(localStorage.getItem('user')).role;
      console.log(this.role);
    }
  }

  // ngDoCheck(): void {
  //   if(JSON.parse(localStorage.getItem('user')) !== null) {
  //     this.user = JSON.parse(localStorage.getItem('user'));
  //     this.role = JSON.parse(localStorage.getItem('user')).role;
  //     console.log(this.role);
  //   }
  // }

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
