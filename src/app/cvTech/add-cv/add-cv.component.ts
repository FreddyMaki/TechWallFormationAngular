import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {

  constructor(private cvService : CvService, private router: Router) { }

  ngOnInit(): void {
  }

  errorMessage : any;
  addPerson(formulaire : NgForm){
      console.log(formulaire);

      this.cvService.addPerson(formulaire.value).subscribe(
        (resonse) =>{
          const link =['cv'];
          this.router.navigate(link);
        },
        (error)=>{
          this.errorMessage = 'Problème de connexion à votre serveur.Prière de consulter l administrateur';
          console.log(error);
        }
      );


    // this.cvService.addPerson(formulaire.value);
    // this.router.navigate(link);
  }

}
