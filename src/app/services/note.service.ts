import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../Model/todo';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  link : string = 'http://localhost:3000/api/Notes';

  constructor(private http:HttpClient) {

  }

  //SELECT//
  getNotes(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.link);
  }

  //UPDATE//
  updateNote(todo: Todo){
    return this.http.put(this.link,todo);
  }

  //Retourne seulement les éléments du tableau qui on la propriété state
  filter(tab: any, property:any){
    return tab.filter((todo : any) =>{ return todo.state === property})
  }

}
