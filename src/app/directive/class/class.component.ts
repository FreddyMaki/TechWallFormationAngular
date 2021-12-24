import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
value: boolean =true;
show : boolean = true;
team=['est', 'om', 'barca', 'milan'];

constructor() { }

  ngOnInit(): void {
  }

  changeteam(){
    this.value = false;
  }

}
