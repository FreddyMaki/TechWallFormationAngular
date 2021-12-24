import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.css']
})
export class UpdateCvComponent implements OnInit {
  personne: Personne = new Personne(0,"","",0,"",0,"", null);
  constructor(private activatedRoute: ActivatedRoute,private cvService: CvService, private router:Router) { }



  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params)=>{
          this.cvService.getPersonneByid(params.id).subscribe(
          (perso) =>{
              this.personne = perso;
              console.log(this.personne);
                }
      )});
  }

  updatePersonne(){
      this.cvService.updatePerson(this.personne).subscribe(
        (response)=>{
          const link=['cv'];
          this.router.navigate(link);

        }
      );
  }

}
