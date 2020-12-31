import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-todo-list',
  templateUrl:'todo-list.component.html',
  styleUrls: ['todo-list.component.scss'
  ]
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];
  doing =[];
  reviewing=[];
  done = [
  ];
  block=[];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
  clear(){

  }
  addToDay(value){
    this.todo.push(value);
  }

}
