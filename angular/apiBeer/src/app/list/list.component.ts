import {Component, Input, OnInit} from '@angular/core';
import { BeersService } from '../beers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  beers;
  constructor(private beersService:BeersService) { }

  ngOnInit() {
    this.getBeers();
  }

  getBeers(){
    this.beersService.getBeers()
      .subscribe(data => {
        this.beers = data;
      })
  }

  addBeer(f){
    this.beersService.addBeer(f.form.value);
  }
}
