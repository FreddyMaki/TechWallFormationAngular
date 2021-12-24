import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  link='http://localhost:3000/api/Users/login';
  constructor(private http: HttpClient) { }

  //POST Authentication
  login(credentials : any) : Observable<any>{
    return this.http.post(this.link, credentials);
  }

  islogged(){
    return !!localStorage.getItem('token');
  }
    //LOGOUT
    logout(){
       localStorage.removeItem('token');
    }

}
