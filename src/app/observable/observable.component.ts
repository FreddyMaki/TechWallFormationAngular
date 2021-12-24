import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  monObservable : Observable<string> = new Observable();
  mesImages = [
    'tim_logo.png',
    'cv_logo.png',
    'dictator.png',
    'mr_bean.png'
  ];
  currentImage : string ="";
  constructor() { }

  //Observable is like Thread than we can execute by calling the method subscribe
  ngOnInit(): void {
    this.monObservable = new Observable((observer)=>{
      let i = this.mesImages.length - 1;
      setInterval(() => {
        observer.next(this.mesImages[i]);
        if(i>=1){
          i--;
        }else{
          i = this.mesImages.length - 1;
        }
      }, 1500);
    });

    //To start the Observer or the Thread:
    this.monObservable.subscribe((result) => {
      console.log(result);
      this.currentImage=result;
    });
  }

}
