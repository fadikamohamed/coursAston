import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeersService {


  constructor(private httpClient: HttpClient) { }

  getBeers():Observable<any>{
    return this.httpClient.get<any>('https://api.punkapi.com/v2/beers')
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

    // TODO: better job of transforming error for user consumptions
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return (error);
  };

}

}