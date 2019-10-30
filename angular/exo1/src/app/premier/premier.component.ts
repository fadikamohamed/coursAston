import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-premier',
  templateUrl: './premier.component.html',
  styleUrls: ['./premier.component.less']
})
export class PremierComponent implements OnInit {

  @Input() prenom;
  constructor() { }

  ngOnInit() {
  }

}
