import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  httpOptions;
  constructor(private http: HttpClient) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
   }

  getBeers():Observable<any>{
    return this.http.get<any>('https://beers-cf53e.firebaseio.com/beers.json')
      .pipe(
        tap(data => {
          console.log(data)
        }),
        catchError(this.handleError('getBeers', []))
      )
  }

  addBeer(beer):Observable<any> {
    console.log(beer);
    return this.http.post<any>('https://beers-cf53e.firebaseio.com/beers.json', beer)
      .pipe(
        catchError(this.handleError('addBeer', beer))
      );
      
  }

  getBeer(key):Observable<any>{
    return this.http.get<any>('https://beers-cf53e.firebaseio.com/beers/'+key+'.json')
      .pipe(
        tap(data => {
          console.log(data)
        }),
        catchError(this.handleError('getBeers', []))
      )
  }


        /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return (error);
    };
  }
}
