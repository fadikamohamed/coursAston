import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { BeersM } from './models/beers';

@Injectable({
  providedIn: 'root'
})
export class BeersService {


  constructor(private http: HttpClient) { }

   httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    getBeers():Observable<any>{
      return this.http.get<any>('https://beers-cf53e.firebaseio.com/beers.json')
        .pipe(
          tap(data => {
            console.log(data)
          }),
          catchError(this.handleError('getBeers', []))
        )
    }
      searchBeers(value):Observable<any>{
      return this.http.get<any>('https://beers-cf53e.firebaseio.com/beers.json/?name=/^value/')
        .pipe(
          tap(data => {
            console.log(data)
          }),
          catchError(this.handleError('getBeers', []))
        )
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

  addBeer(value):Observable<any> {
    console.log(value);
    return this.http.post<any>('https://beers-cf53e.firebaseio.com/beers.json', value, this.httpOptions)
    .pipe(
        catchError(this.handleError('addBeer', value))
        );
        
      }

      deleteBeer(key):Observable<any>{
        return this.http.delete<any>('https://beers-cf53e.firebaseio.com/beers/'+key+'.json')
          .pipe(
            tap(data => {
              console.log(data)
            }),
            catchError(this.handleError('getBeers', []))
          )
      }

      editBeer(key, value){
        return this.http.put<any>('https://beers-cf53e.firebaseio.com/beers/'+key+'.json', value, this.httpOptions)
        .pipe(
          tap(data => {
            console.log(data)
          }),
          catchError(this.handleError('getBeers', value))
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
