import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
private personList: Personne[];
link= 'http://localhost:3000/api/personnes';

  constructor(private http: HttpClient) {
    this.personList = [new Personne(1,"Bean","Rowan",56,"assets/images/mr_bean.png",154646,"Actor",null),
      new Personne(2,"Sacha","Baron Cohen",25,"assets/images/rotating_card_profile.png",5454839,"Miss Monde", null),
      new Personne(3,"test","test",25,"",0,"test", null)
      ];
  }

  getFakePersonnes() : Personne[]{
    return this.personList;
  }


//Utilisation de l'API loopback en passant par la basede données PostgreSQL
//GET///////////////////////////////////////////////////////////////////////////////
  getPersonnes() : Observable<Personne[]>{
       return this.http.get<Personne[]> (this.link);
     }
//GET person by Id
  getPersonneByid(id : number) :Observable<Personne> {
    //return this.http.get<Personne>(this.link + `/${id}`); //Ou
    return this.http.get<Personne>(this.link + "/" +id);

  }

  // getPersonneByid(id : number) {
  //   const result = this.personList.find(pers => {
  //     return pers.id == id
  //   });
  //   return result;
  // }

  // addPerson(personne: Personne){
  //   //Add the new person to the list and increment the id:
  //   console.log(personne);
  //   const size = this.personList.length;
  //   personne.id = this.personList[size -1].id + 1;
  //   this.personList.push(personne);
  // }

  //ADD PERSON TO THE POSTGRE DATABASE
  //POST/////////////////////////////////////////////////////////////////
    addPerson(personne: Personne) :Observable<any>{
      //Ajout du token pour authentifier les accès.
      // const token = localStorage.getItem('token'); //Récupérer le token stocké dans storage pour l'utiliser dans le Post:
      // if(token){
      //   const params = new HttpParams().set('access_token',token);
      //   return this.http.post(this.link, personne,{params});
      // }

    return this.http.post(this.link, personne);
  }

  //DELETE////////////////////////////////////////////////////////////////
  deletePerson(id: number){
    //return this.http.delete(this.link + `/${id}`);
    return this.http.delete(this.link + "/" + id);

  }

  //PUT//////////////////////////////////////////////////////////////////
  updatePerson(personne: Personne){
    console.log(personne);
    return this.http.put(this.link,personne);
  }

  //SEARCH///////////////////////////////////////////////////////////////
  findByName(name :string) : Observable<Personne[]>{
    //Filtrage recherche avec le filtre de Loopback:
    const filter = `{"where":{"name":{"like" : "%${name}%"}}}`;
    const filster = '{"where":{"name":{"like" : "%' + name + '%"}}}';

    const params = new HttpParams().set('filter', filter);
    console.log()
    return this.http.get<Personne[]>(this.link, {params});
  }
}


