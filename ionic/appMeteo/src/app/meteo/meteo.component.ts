import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../services/meteo.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss'],
})
export class MeteoComponent implements OnInit {

  public ddd: [];
  public formCity: FormGroup;
  public formCoord: FormGroup;
  private souscription: Subscription;
  private meteo: any;
  constructor(
    private meteoService: MeteoService,
    private formBuilder: FormBuilder,
    private storage: Storage
  )
  {

    this.formCity = new FormGroup(
      {
        city: new FormControl('')
      }
    );

    this.formCoord = new FormGroup(
      {
        lon: new FormControl(''),
        lat: new FormControl('')
      }
    );

    this.storage.get('name').then((val) => {
      this.ddd = val['city']['name'];
      console.log(val);
    });

  }


  ngOnInit() {
  }

  /*
    ngOnDestroy() {
      if (this.souscription) {
        this.souscription.unsubscribe();
      }
    }*/

  getByCity() {
    console.log(this.formCity.value);
    this.meteoService.getByCity(this.formCity.value)
      .subscribe(data => {
        console.log(data);
        this.meteo = data;
        this.saveData(data);
        this.ddd = this.getData()['city']['name'];
      })
  }

  /*
  getByCoord() {
    console.log(this.formCoord.value);
    this.meteoService.getByCoord(this.formCoord.value)
      .subscribe(data => {
        console.log(data);
        this.meteo = data;
        this.saveData(data);
      })
  }*/

  saveData(data){
    this.storage.set('name', data);
  }

  getData(){
    return this.storage.get('name').then((val) => {
      console.log(val);
    });    
  }

}
