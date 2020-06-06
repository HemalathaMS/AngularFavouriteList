import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
  } from '@angular/router';
  import { Observable, of, EMPTY } from 'rxjs';
  import { take, mergeMap, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private planets : any = [];

  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> { 
    const url ='https://assignment-machstatz.herokuapp.com/planet';
    return this.http.get(url).pipe(catchError(error   => {
       return EMPTY
    }), mergeMap(something => {
          if (something) {
             return of(something)
          } else {
             return EMPTY;
          }
        })
      )
    }

  getData(): any {
    return this.planets;
  }

  setData(planets) {
    this.planets = planets;
  }
}
