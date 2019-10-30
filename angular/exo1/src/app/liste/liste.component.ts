import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.less']
})
export class ListeComponent implements OnInit {

  personnes = [
    { 'nom':'Laurene', 'age':18 },
    { 'nom':'Margaux', 'age':28 },
    { 'nom':'Coline', 'age':25 },
    { 'nom':'Camille', 'age':18 }
  ];
  @Input() login;
  
  constructor() { }

  ngOnInit() {
  }

  click()
  {
    if(this.login == true){
    this.login = false;
    }else{
      this.login = true;      
    }
  }

}
