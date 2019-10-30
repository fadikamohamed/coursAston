import { Injectable } from '@angular/core';
import { Todo } from './models/todo'

@Injectable({
  providedIn: 'root'
})
export class TodoListeService {

  liste = [
    new Todo('Terminer cet exercice', 'white'),
    new Todo('Terminer cet exercice 2', 'white'),
    new Todo('Terminer cet exercice 3', 'white')
  ]

  constructor() { }

  getTodo()
  {
    return this.liste
  }

  addtask(f){
    const element = f.form.value.name;
    const color = 'white';
    
    const todo: Todo = new Todo(element, color);
    
    this.liste.push(todo);
  }

  deleteTask(i){
    this.liste.splice(i, 1);
  }

  addIn(i){
    
  }
  
}
