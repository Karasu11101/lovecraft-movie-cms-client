import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class NewMovieComponent {

  @ViewChild('modalSummary', {static: false}) modal: ElementRef;

  form = new FormGroup ({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  })

  constructor(private router: Router, private moviesService: MoviesService, private movieModal: NgbModal) {}

  onSubmit() {
    console.log(this.form.value);
    const movie = {
      title: this.form.controls.title,
      description: this.form.controls.description,
      image: this.form.controls.image
    }
    this.open(this.modal, movie.image.value);
  }

  open(content: any, imgUrl: string) {
    this.movieModal.open(content, {ariaLabelledBy: 'movie sheet creation summary', size: 'xl', centered: true}).result
      .then((res) => {
        console.log('redirected to new movie page');
        location.reload()
      })
      .catch((res) => {
        console.log('redirected to movies page');
        this.router.navigateByUrl('movies');
      })
  }
}
