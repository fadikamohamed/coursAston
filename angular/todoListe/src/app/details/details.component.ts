import { Component, OnInit, Input } from '@angular/core';
import { TodoListeService } from '../todo-liste.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {

  @Input() liste = [];
  constructor(private todoService: TodoListeService) { }

  ngOnInit() {
  }

  delete(i){
    this.todoService.deleteTask(i);
  }

  addIn(i){
    this.todoService.addIn(i);
  }
}
