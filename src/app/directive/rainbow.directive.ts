import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

tableau = ['blue','lightblue','coral','pink','green','lightyellow','lightgreen','gold','gray','lightgray','purple'];
@HostBinding('style.bordercolor') bc:any ='white';
@HostBinding('style.color') color:any='white';
longueur : any ="Test!!!!!!!!!!";

constructor() { }

@HostListener('keypress') changeColor(){
  const index = Math.floor(Math.random() * (this.tableau.length - 1));
  this.bc =this.tableau[index];
  this.color= this.tableau[index];



 //this.longueur = this.tableau.lenght;

  // this.bc = 'green';
  // this.color= 'yellow';
}


}
