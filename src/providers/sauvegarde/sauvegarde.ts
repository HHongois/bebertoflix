import { DetailsPage } from './../../pages/details/details';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the SauvegardeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//const FAV_KEY = "favoris";

@Injectable()
export class SauvegardeProvider {
  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello SauvegardeProvider Provider');
  }

  public addFavoris(details: Object) {

    this.storage.get(details['imdbID']).then((result) => {

      console.log(result)
      if (!result) {
        this.storage.set(details['imdbID'], details);
      }

    });
  }

  public removeFavoris(details: Object) {
    this.storage.remove(details['imdbID']);
  }

  public removeAll() {
    this.storage.forEach((value, key, index) => {
      this.storage.remove(key);
    });
  }
  public getSauvegarde() {
    let tab1: Array<Object> = [];

    return this.storage.forEach((value, key, index) => {
      tab1.push(this.storage.get(key).then(result => result))
    }).then(() => {
      return Promise.all(tab1)
    })

  }
}
