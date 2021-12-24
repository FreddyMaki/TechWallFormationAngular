import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { EmbaucheService } from 'src/app/services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {

  personList : Personne[]=[];
  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit(): void {
    this.personList = this.embaucheService.getEmbauchés();
  }

}
