import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../Model/todo';


@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  todo : Todo[]=[];
  doing : Todo[]=[];
  done : Todo[]=[];

  constructor() { }

  ngOnInit(): void {
    //INITIALISATION:
    this.todo = [
      new Todo(1,'Lundi', 'Pick up groceries', 'done'),
      new Todo(2,'Mardi', 'Take a shower', 'done'),
      new Todo(3,'Wednesday', 'pick keys', 'doing')
    ];

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
    }

  }

  showMessage(messages: string){
    console.log("message");
  }

}
