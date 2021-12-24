import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent implements OnInit {
   personne : any;
  constructor(private cvService: CvService, private activatedRoute : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params)=>{
          this.personne=this.cvService.getPersonneByid(params.id).subscribe(
          (perso) =>{
              this.personne = perso;
              console.log(this.personne);
                }
      )});
  }

  //DELETE////////////////////////////////
  deletePerson(){
    this.cvService.deletePerson(this.personne.id).subscribe(
      (response)=>{
        const link=['cv']  ;
        this.router.navigate(link);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  updatePerson(id: number){
   const link = ['cv/updateCv', id];
   this.router.navigate(link);

  }


}
