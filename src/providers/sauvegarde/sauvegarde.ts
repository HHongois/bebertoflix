import { DetailsPage } from './../../pages/details/details';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
/*
  Generated class for the SauvegardeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//const FAV_KEY = "favoris";

@Injectable()
export class SauvegardeProvider {
  constructor(public http: HttpClient,private storage: Storage) {
    console.log('Hello SauvegardeProvider Provider');
  }

  public addFavoris(details: Object){
    this.storage.set(details['imdbID'], details);


    // console.log(this.storage.get(details['imdbID']).then);
    // console.log(details['imdbID']);
    // console.log(JSON.stringify(details));

  }
 
  public removeFavoris(details: Object) {
    console.log(this.storage.keys())
    this.storage.remove(details['imdbID']);
  }

  public getSauvegarde(){
    /* return new Promise((resolve, reject) => {
      this.storage.forEach((element) => {
        tab.push(element);
      }).then(() => resolve(tab))
    }); */

    let tab:Array<Object> = [];

    return new Promise((resolve) => {
      this.storage.forEach((value, key, index) => {
        this.storage.get(key).then(result => tab.push(result))
      }).then(() => {
        resolve(tab)
      })
    });


    // let tab:Array<Object> = [];
    //  this.storage.keys().then(
    //   (result) => {
    //     result.forEach((value, key, index) => {
    //       this.storage.get(value).then(result => tab.push(result))
    //     });
    //     console.log(tab);
    //     return tab;
    //   });
  }
}
