import { Component, OnInit } from '@angular/core';
import * as console from 'console';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from 'src/app/services/cv.service';
import { PremierService } from 'src/app/services/premier.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  //Variables:
  personList: Personne[] = [];
  selectedPerson: Personne = new Personne(0,"","",0,"",0,"",null);


  //Injection de dépendance de service dans le constructeur:
  constructor(private cvService : CvService) { }

  //Initialisation:
  ngOnInit(): void {
    // this.personList = [new Personne(1,"Bean","Rowan",56,"mr_bean.png",154646,"Actor"),
    //                   new Personne(1,"Sacha","Baron Cohen",25,"rotating_card_profile.png",5454839,"Miss Monde"),
    //                   new Personne(1,"test","test",25,"",0,"test")
    //                   ];

  //Appel du Service Premier service:
  //this.premierService.addData("some data from cv.component")
  //this.premierService.logger(this.personList);


    //Utilisation de services pour récuperer le tableau:
    this.cvService.getPersonnes().subscribe(
      (perso)=>{
                      this.personList = perso;
                    },
      (error)=>{
              alert('Problème de connexion à l\'api, les données affichées sont Fake!');
              this.personList = this.cvService.getFakePersonnes();

              }

    );
  }

  selectPerson(p :any){
    this.selectedPerson= p;
  }



}
