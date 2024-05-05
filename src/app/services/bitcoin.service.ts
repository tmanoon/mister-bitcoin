import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { catchError, retry, tap, map, take } from 'rxjs/operators'
import { BehaviorSubject, from, Observable, throwError } from 'rxjs'

let bitcoinApi = 'https://blockchain.info/tobtc?currency=USD&value='
const RATE = 'rate'

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  public getRate(coins: number): Observable<string> {
    const cachedRate = localStorage.getItem(RATE)
    if (cachedRate) {
      return new Observable<string>(observer => {
        observer.next(cachedRate)
        observer.complete()
      })
    } else {
      const url = `${bitcoinApi}${coins}`
      return this.http.get<string>(url)
        .pipe(
          retry(1),
          catchError(this._handleError)
        )
    }
  }
  
  private _handleError(err: HttpErrorResponse) {
    console.log('err:', err)
    return throwError(() => err)
  }

}


