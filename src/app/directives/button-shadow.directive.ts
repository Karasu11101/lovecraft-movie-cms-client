import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonShadow]'
})
export class ButtonShadowDirective {
  @HostBinding('style.box-shadow') enlightened: string;

  @HostListener('mouseover') lightUpBox() {
    this.enlightened = '1.0px 1.0px 10.0px black';
  }
  @HostListener('mouseout') turnOffBox() {
    this.enlightened = '';
  }

  constructor() { }

}

