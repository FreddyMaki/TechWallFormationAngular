import { Component, EventEmitter, Input, OnInit ,Output} from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent implements OnInit {
@Input() personne: Personne[] = [];
@Output() selectedPerson = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  selectPerson(selectedPerson:any){
    //console.log(selectedPerso)
    this.selectedPerson.emit(selectedPerson);
  }

}
