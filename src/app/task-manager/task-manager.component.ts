import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../Model/todo';
import { NoteService } from '../services/note.service';


@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  todo : Todo[]=[];
  doing : Todo[]=[];
  done : Todo[]=[];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    //INITIALISATION:
    this.noteService.getNotes().subscribe((todos: any) => { this.todo = this.noteService.filter(todos, 'todo');
                                                      this.doing = this.noteService.filter(todos, 'doing');
                                                      this.done = this.noteService.filter(todos, 'done');});



    // this.todo = [
    //   new Todo(1,'Lundi', 'Pick up groceries', 'done'),
    //   new Todo(2,'Mardi', 'Take a shower', 'done'),
    //   new Todo(3,'Wednesday', 'pick keys', 'doing')
    // ];

    // this.doing = [
    //   new Todo(1,'Lundi', 'Pick up groceries', 'done'),
    //   new Todo(1,'Mardi', 'Take a shower', 'done'),
    //   new Todo(1,'Friday', 'pick keys', 'doing')
    // ];
  }

  //Drag and drop example


  //doing = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  // done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<Todo[], any, any>) {
    //test si on est dans la même liste:
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }//Sinon
    else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      const value = event.item.data;
      value.state = event.container.element.nativeElement.classList[1];//le 2eme element correspond à "todo" ou doing ou done
      this.noteService.updateNote(value).subscribe((response)=>{console.log(response);});

    }

  }

  showMessage(messages: string){
    console.log("message");
  }

}
