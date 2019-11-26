import { Component, OnInit } from '@angular/core';
import { AsteroidesService } from '../services/asteroides.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-asteroides',
  templateUrl: './asteroides.component.html',
  styleUrls: ['./asteroides.component.scss'],
})
export class AsteroidesComponent implements OnInit {

  public astr: any;
  constructor(private astero: AsteroidesService) { }

  ngOnInit() {
    this.getAstero();
  }

  getAstero(){
    return this.astero.getAstero()
    .subscribe(data => {
      console.log(data);
      this.astr = data;
    });
  }
}
