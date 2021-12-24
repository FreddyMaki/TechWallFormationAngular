export class Todo {
  id: number = 0;
  title:string ="";
  content:string="";
  state:string="";

	constructor(id: number, title:string, content:string, state:string) {
    this.id=id;
    this.title=title;
    this.content=content;
    this.state=state;

	}


}
