import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos:Todo[];

  constructor() {

    
   }

  ngOnInit(): void {
    this.todos = [
      {
        title: 'Shower',
        completed: false
      },
      {
        title: 'Sleep',
        completed: false
      },
      {
        title: 'Eat',
        completed: false
      }
    ]
  }

}
