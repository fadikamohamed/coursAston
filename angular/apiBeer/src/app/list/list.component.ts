import {Component, Input, OnInit} from '@angular/core';
import { BeersService } from '../beers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  beers;
  key;
  constructor(private beersService:BeersService) { }

  ngOnInit() {
    this.getBeers();
    this.deleteBeer(this.key);
  }

  getBeers(){
    this.beersService.getBeers()
      .subscribe(data => {
        this.beers = data;
      })
  }

  addBeer(f){
    this.beersService.addBeer(f.form.value)
    .subscribe(() => this.getBeers());
  }

  deleteBeer(key){
    this.beersService.deleteBeer(key)
    .subscribe(() => this.getBeers());
  }

  searchBeer(value){
    this.beersService.searchBeers(value)
    .subscribe(data => {
      this.beers = data;
    })
  }
}
