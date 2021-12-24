import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
@Input() color : any ='white';
@Input() bgColor:any = 'lightblue';

fff !: string;
 size : any ='25px';

  constructor() { }

  ngOnInit(): void {
  }

  changeSize(s : any){
    this.size = s + 'px';
  }

}
