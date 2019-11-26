import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsteroidesService {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      "x-rapidapi-host": "NasaAPIdimasV1.p.rapidapi.com",
      "x-rapidapi-key": "SIGN-UP-FOR-KEY"
    })
  };

  constructor(private http: HttpClient) { }

  private key = "MWy8buRfW0ZvJeqQXTuyhOTJveyTBagOZBKZaRLY";
  private link = "https://api.nasa.gov/planetary/apod?api_key=MWy8buRfW0ZvJeqQXTuyhOTJveyTBagOZBKZaRLY";
  private url = 'https://nasaapidimasv1.p.rapidapi.com/getAsteroids';

  getAstero():Observable<any>{
    return this.http.get(this.link);
  }
}
