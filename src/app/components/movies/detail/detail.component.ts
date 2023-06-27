import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { take, first } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  movie: Movie;

  constructor(private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

    ngOnInit(): void {
        this.onGetMovies();
    }

    onGetMovies(): void {
      const id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));
      this.moviesService.getMovie(id).pipe(
        first()
      ).subscribe({
        next: (res) => {
          this.movie = res;
        },
        error: (e) => console.log(e)
      });
    }

}
