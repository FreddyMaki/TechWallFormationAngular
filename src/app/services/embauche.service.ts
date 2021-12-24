import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private personList : Personne[]
  constructor() {
    this.personList = [];
  }

  getEmbauchés(){
    return this.personList;
  }

  embaucher(p: Personne) :void{
    const index = this.personList.indexOf(p);

    if(index < 0){
      //Ajouter la personne
      this.personList.push(p);//Push veut dire ajouter un element à la fin de la liste array
    }else{
      alert(`${p.name} est déja selectionnée`);

    }

  }

  debaucher(p: Personne):void{
    const index = this.personList.indexOf(p);
    if(index >=0){
      this.personList.splice(index, 1); //Splice veut dire enlever l'element à l'index indiqué: Personne
    }


  }


}
