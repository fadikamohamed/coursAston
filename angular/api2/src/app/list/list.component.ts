import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  beers;
  constructor(private beerService: BeersService) { }

  ngOnInit() {
    this.getBeers();
  }

  getBeers(){
    this.beerService.getBeers()
      .subscribe(data=>{
        this.beers = data;
      })
  }

}
