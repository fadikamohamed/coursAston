import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../services/meteo.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss'],
})
export class MeteoComponent implements OnInit {

  public formCity: FormGroup;
  public formCoord: FormGroup;
  private souscription: Subscription;
  private meteo: any;
  constructor(private meteoService: MeteoService, private formBuilder: FormBuilder) {

    this.formCity = new FormGroup(
      {
        city: new FormControl('')
      }
    );

    this.formCoord = new FormGroup(
      {
        city: new FormControl('')
      }
    );
  }


  ngOnInit() {
  }


  ngOnDestroy() {
    if (this.souscription) {
      this.souscription.unsubscribe();
    }
  }

  getByCity() {
    console.log(this.formCity.value);
    this.meteoService.getByCity(this.formCity.value)
      .subscribe(data => {
        console.log(data);
        this.meteo = data;
      })
  }

  getByCoord() {
    console.log(this.formCoord.value);
    this.meteoService.getByCoord(this.formCoord.value)
      .subscribe(data => {
        console.log(data);
        this.meteo = data;
      })
  }

}
