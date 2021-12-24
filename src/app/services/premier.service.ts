import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremierService {

  constructor() {

  }
/*Un service est juste une classe qui permet de faire des traitements */
  //Logger des données:
  data=[
    'data1',
    'data2',
    'data3',
    'data4'
  ];

  logger(data: any){
    console.log(this.data);
    console.log(data);
  }
  addData(data :any){
    this.data.push(data);
  }
}
