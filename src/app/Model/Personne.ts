export class Personne {
  id :any;
  name : string="";
  firstname : string="";
  age : number=0;
  path : string="";
  cin : number = 0;
  job : string="";
  images : any ;


  constructor(
    id: any,
    name: string,
    firstname: string,
    age: number,
    path: any,
    cin: number ,
    job: string,
    images :any
) {
    this.id = id
    this.name = name
    this.firstname = firstname
    this.age = age
    this.path = path
    this.cin = cin
    this.job = job
    this.images = images
  }


}
