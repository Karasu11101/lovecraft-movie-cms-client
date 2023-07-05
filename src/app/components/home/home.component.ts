import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { take, first } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  movies: Movie[];
  username: string;
  name: string;
  surname: string;
  email: string;


  constructor(private moviesService: MoviesService, private userService: UserService) {}

  ngOnInit(): void {
    this.onGetRecipes();

    this.userService.userData.subscribe((res: any) => {
      this.username = res.username;
      this.name = res.name;
      this.surname = res.surname;
      this.email = res.email;
    });
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
    this.userService.userData.next(''); // è necessario svuotare la sorgente, altrimenti il replay continuerà a caricare i dati memorizzati
    this.name = '';
    this.email = '';
    this.username = '';
    this.surname = '';
  }
}
