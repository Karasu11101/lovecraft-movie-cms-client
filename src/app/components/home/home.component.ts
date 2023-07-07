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

  constructor(private moviesService: MoviesService, private userService: UserService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.onGetRecipes();

    this.userService.userData.subscribe((res: any) => {
      this.name = res.name;
      this.username = res.username;
      this.surname = res.surname;
      this.email = res.email;
      this.dateOfBirth = res.dateOfBirth;
    })
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

  closeWindow() {
    this.userService.userData.next('');
    this.name = '';
    this.username = '';
    this.surname = '';
    this.email = '';
    this.dateOfBirth = '';
  }
}
