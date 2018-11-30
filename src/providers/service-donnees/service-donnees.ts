import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

/*
  Generated class for the ServiceDonneesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceDonneesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServiceDonneesProvider Provider');
  }

  public getMovies(){
    return this.http.get('http://www.omdbapi.com/?s=bat&apikey=75522b56').pipe(
        map(response => response['Search'] )
      );  
  }
  public searchMovies(ex:string,type:string){
    return this.http.get('http://www.omdbapi.com/?s='+ex+'&type='+type+'&apikey=75522b56').pipe(
      map(response => response['Search'] )
    );
  }

}
