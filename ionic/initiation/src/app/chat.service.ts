import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url = "https://api.gettyimages.com/v3/images";
  // private url = "https://api.thecatapi.com/v1/images/search";

  constructor(private http: HttpClient) { }

  getChat():Observable<any>{
    return this.http.get(this.url + '/v3/images')
    .pipe(
      tap(data => {
        console.log(data)
      }),
      catchError(this.handleError('getChat', []))
    );
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
    }
  }
}
