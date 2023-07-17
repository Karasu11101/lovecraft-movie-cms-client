import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  percorso = '../assets/images/movie-';
  images = [
    {id: 1, label: 'Shadow of the Unnamable', percorso: 'src\assets\images\movie-1.jpg'},
    {id: 2, label: 'Pickman\'s Muse'},
    {id: 3, label: 'Color out of Space'},
    {id: 4, label: 'The Deep Ones'},
    {id: 5, label: 'The Call of Cthulhu'},
  ]

  constructor(private router: Router) {}

  rerout(id: number, title: string) {
    this.router.navigateByUrl('/movies/dettaglio/' + title + '/' + id);
  }
}
