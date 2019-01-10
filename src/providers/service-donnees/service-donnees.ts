import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

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

  public getMovies() {
    return this.http.get('http://www.omdbapi.com/?s=*sim*&type=movie&apikey=75522b56').pipe(
      map(response => response['Search'])
    );
  }
  public getSeries() {
    return this.http.get('http://www.omdbapi.com/?s=*sim*&type=series&apikey=75522b56').pipe(
      map(response => response['Search'])
    );
  }
  public searchMovies(ex: string, type: string) {
    
    if (ex === '' && type === "series") {
      return this.getSeries();
    }
    if(ex === '' && type === "movie"){
      return this.getMovies();
    }
    return this.http.get('http://www.omdbapi.com/?s=' + ex + '&type=' + type + '&apikey=75522b56').pipe(
      map(response => response['Search'])
    );
  }
  public searchSeries(ex: string, saison: string): any {
    return this.http.get('http://www.omdbapi.com/?i=' + ex + '&type=series&apikey=75522b56&Season=' + saison).pipe(map(response => response['Episodes']));
  }
  public getDetails(id: string) {
    return this.http.get('http://www.omdbapi.com/?i=' + id + '&apikey=75522b56').pipe();
  }

}
