import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult : Personne[]=[];
  personne : Personne= new Personne(0,"","",0,"",0,"", null);

  constructor(private cvService : CvService, private router: Router) { }

  ngOnInit(): void {
    this.searchResult = [];
  }

  //Search//////////////////////////////////////////////
  inputSearch : any;
  search(chaine : any){

    //LE CHAMP DE RECHERCHE EST SENSIBLE A LA classe
    //il faut ajouter une methode qui transforme les données entreés en minuscule ou maj
    let name = chaine.trim();
    if(name.length){
      this.cvService.findByName(name).subscribe(
        (personnes)=>{
          this.searchResult = personnes;
          console.log(personnes);
      });
    }
    else{
      this.searchResult=[];
    }

    console.log(chaine);
  }

  selectPerson(personne :Personne){
    const link = ['cv', personne.id];
    this.router.navigate(link);
    this.searchResult = [];

    //Vider le champ de recherche:
    this.inputSearch ='';

  }

}
