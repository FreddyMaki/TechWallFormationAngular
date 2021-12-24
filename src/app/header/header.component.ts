import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authentificationService:AuthentificationService) { }

  ngOnInit(): void {
  }

  //LOGOUT///////////////////////////////
  logout(){

    this.authentificationService.logout();
  }

  visibility : boolean=false;
  show(){
    this.visibility = !this.visibility;
  }
}
