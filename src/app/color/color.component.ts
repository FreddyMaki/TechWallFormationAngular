import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PremierService } from 'src/app/services/premier.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers :[PremierService]
})
export class ColorComponent implements OnInit {
  color : any ='red';
  constructor(private premierService : PremierService,
              private router: Router,
              private activatedRoute : ActivatedRoute)
  { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params)=>{
     //this.color = params['default'];
     //Or on peut utiliser ça
     console.log(params);
     this.color = params.default;
    })
  }

  loggerMesData(){
    this.premierService.logger("TEST!!!!");
  }

  //Naviger vers le lien en utilisant la méthode navigate
  backToCv() : void{
    const link = ['cv'];
    this.router.navigate(link);
  }

}
