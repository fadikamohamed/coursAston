import { Component, OnInit } from '@angular/core';
import { TodoListeService } from '../todo-liste.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.less']
})
export class ListeComponent implements OnInit {

  liste = [];
  constructor(private todoService: TodoListeService) { }

  ngOnInit() {
    this.getTodo();
  }

  getTodo(){
    this.liste = this.todoService.getTodo();
  }

  delete(i){
    this.todoService.deleteTask(i);
  }
}
