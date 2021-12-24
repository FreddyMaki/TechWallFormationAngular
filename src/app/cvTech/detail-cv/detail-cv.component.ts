import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { EmbaucheService } from 'src/app/services/embauche.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {

  //@Input() personne: Personne = new Personne(0,"","",0,"",0,"");
  @Input() personne!: Personne;
  constructor(private embaucheService: EmbaucheService, private router: Router) { }

  ngOnInit(): void {
  }

  embaucher(){
    this.embaucheService.embaucher(this.personne);
  }

  moreInfos(){
    const link=['cv',this.personne.id]; //Dans AppRouting ceci correspond à cv/MoreDetails
    this.router.navigate(link);

    console.log(this.personne.id);
  }

}
