import { Component, OnInit } from '@angular/core';
import { TodoListeService } from '../todo-liste.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {

  constructor(private todoListe: TodoListeService) { }

  ngOnInit() {

  }

  Submit(f){
    this.todoListe.addtask(f);
    f.reset();
  }
}
