import { Component, OnInit, Input } from '@angular/core';
import { BeersService } from '../beers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  beers;
  key;
  constructor(private beerService: BeersService, private route: ActivatedRoute) {

    this.route.params
      .subscribe(params => this.key = params.key)
   }

  ngOnInit() {
    this.getBeer(this.key);
  }

  getBeer(key){
    this.beerService.getBeer(key)
      .subscribe(data => {
        this.beers = data;
      })
  }
}
