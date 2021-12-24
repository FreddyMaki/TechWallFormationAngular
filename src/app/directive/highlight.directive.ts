import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') bg:any = 'red';

  constructor() { }

  @HostListener('mouseenter') mouseEnter(){
    this.bg ='yellow';
  }

  @HostListener('mouseleave') mouseLieave(){
    this.bg= 'red';
   }
}
