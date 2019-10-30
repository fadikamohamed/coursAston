import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeersService } from '../beers.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  id:number;
  constructor(private route: ActivatedRoute, private beerService: BeersService) {
    this.route.params
      .subscribe(params => this.id = params.id)
   }

  ngOnInit() {
  }

}
