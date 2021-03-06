import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  set(){
    // console.log('clicked');
    
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  onToggle(todo){
    console.log('toggle');
    todo.completed = !todo.completed
  }

  // onDelete(todo){
  //   console.log('delete');
    
  // }
}
