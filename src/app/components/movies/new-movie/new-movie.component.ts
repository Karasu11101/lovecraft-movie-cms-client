import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss'],
})
export class NewMovieComponent {

  @ViewChild('modalSummary', {static: false}) modal: ElementRef;

  form = new FormGroup ({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    confirm: new FormControl(false, Validators.requiredTrue)
  })

  constructor(private router: Router, private moviesService: MoviesService, private movieModal: NgbModal) {}

  onSubmit() {
    console.log(this.form.value);
    const movie = {
      title: this.form.value.title,
      description: this.form.value.description,
      image: this.form.value.image
    }
    this.moviesService.createMovie(movie).subscribe((res: any) => {
      this.open(this.modal, res.image);
    });
  }

  open(content: any, imgUrl: string) {
    this.movieModal.open(content, {ariaLabelledBy: 'movie sheet creation summary', size: 'xl', centered: true}).result
      .then((res) => {
        console.log('redirected to new movie page');
        this.form.reset();
      })
      .catch((res) => {
        console.log('redirected to movies page');
        this.router.navigateByUrl('movies');
      })
  }

}
