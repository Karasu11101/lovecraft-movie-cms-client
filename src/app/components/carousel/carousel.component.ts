import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  percorso = '../assets/images/movie-';
  images = [
    {id: 1, label: 'Shadow of the Unnamable'},
    {id: 2, label: 'Pickman\'s Muse'},
    {id: 3, label: 'Color out of Space'},
    {id: 4, label: 'The Deep Ones'},
    {id: 5, label: 'The Call of Cthulhu'},
  ]
}
