import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(){
    return [
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
