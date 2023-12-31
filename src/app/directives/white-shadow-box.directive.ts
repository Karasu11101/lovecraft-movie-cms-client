import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appWhiteShadow]'
})
export class WhiteShadowBoxDirective {
  @HostBinding('style.box-shadow') enlightened: string;

  @HostListener('mouseover') lightUpBox() {
    this.enlightened = '0.0px 0.0px 10.0px white';
  }
  @HostListener('mouseout') turnOffBox() {
    this.enlightened = '';
  }

  constructor() { }

}
