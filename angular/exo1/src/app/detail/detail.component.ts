import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  @Input() personne;

  @Input() login;

  bg = 'green';
  constructor() { }

  ngOnInit() {
  }
  clickB()
  {
    if(this.bg == 'red'){
      this.bg = 'grey';
    }else if(this.bg == 'grey'){
      this.bg = 'green';
    }else if(this.bg == 'green'){
      this.bg = 'blue';
    }else if(this.bg == 'blue'){
      this.bg = 'red';
    }
  }

}
