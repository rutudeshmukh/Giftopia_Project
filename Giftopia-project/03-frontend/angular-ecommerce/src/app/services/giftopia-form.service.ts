import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; //rxjs = reactive javascript
import { Country } from '../common/country';
import { map } from 'rxjs/operators';
import { State } from '../common/state';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiftopiaFormService {

  private countriesUrl = environment.giftopiaApiUrl + '/countries';
  private statesUrl = environment.giftopiaApiUrl +'/states';
  
  constructor(private httpClient: HttpClient) { }

  getCountries():  Observable<Country[]>{

    return this.httpClient.get<GetResponseCountries>(this.countriesUrl).pipe(
      map(response => response._embedded.countries)
    );
  }

  getStates(theCountryCode: string): Observable<State[]>{

    //search url
    const searchStatesUrl = `${this.statesUrl}/search/findByCountryCode?code=${theCountryCode}`;

    return this.httpClient.get<GetResponseStates>(searchStatesUrl).pipe(
      map(Response=>Response._embedded.states)
    );

  }

  getCreditCardMonths(startMonth:number): Observable<number[]>{
   
    let data: number[] = [];

    //build an array for "Month" dropdown list
    // - start at current month and loop until

    for(let theMonth = startMonth; theMonth<=12;theMonth++){
      data.push(theMonth);
    }
    return of(data);
  }

  getCreditCardYears(): Observable<number[]>{
   
    let data: number[] = [];

    //build an array for "Year" dropdown list
    // - start at current year and loop for next 10 years

    const startYear: number = new Date().getFullYear();
    const endYear: number = startYear  + 10;

    for(let theYear = startYear; theYear <= endYear;theYear++){
      data.push(theYear);
    }
    return of(data);
  }
}

interface GetResponseCountries{
  _embedded:{
    countries: Country[];
  }
}

interface GetResponseStates{
  _embedded:{
    states: State[];
  }
}