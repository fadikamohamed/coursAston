import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.less']
})
export class ListeComponent implements OnInit {

  @Input() beers;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getBeers();
  }

  getBeers(){
    this.http.get('https://api.punkapi.com/v2/beers').subscribe(data => this.beers = data);
  }
}
