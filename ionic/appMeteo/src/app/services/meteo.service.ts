import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }

  private url = "api.openweathermap.org/data/2.5/forecast?q=";

  getByCity(city): Observable<any> {
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=' + city['city'] + ',fr&appid=c06516a3bb199bb320181c589f72433c&units=metric')
      .pipe(
        tap(data => {
          console.log(data)
        }),
        catchError(this.handleError('getByCity', []))
      );
  }

  getByCoord(coord): Observable<any> {
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?lat=' + coord['lat'] + '&lon=' + coord['lon'] + '&appid=c06516a3bb199bb320181c589f72433c&units=metric')
      .pipe(
        tap(data => {
          console.log(data)
        }),
        catchError(this.handleError('getByCoord', []))
      );
  }



  /**
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return (error);
    }
  }
}
