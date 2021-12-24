import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {
//Variables:
@Input() personne: Personne=new Personne(0,"","",0,"",0,"", null);
  constructor() { }

  ngOnInit(): void {

  }

//ON CLICK
  @Output() selectedPerson = new EventEmitter();
  selectPerson(){
    //Emmettre un evenement et injecter la personne avec tous les infos sur la personne
    this.selectedPerson.emit(this.personne);
  }

}
