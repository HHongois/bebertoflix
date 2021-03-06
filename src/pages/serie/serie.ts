import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceDonneesProvider } from './../../providers/service-donnees/service-donnees';

@IonicPage()
@Component({
  selector: 'page-serie',
  templateUrl: 'serie.html',
})
export class SeriePage {

  public data: Array<Object> = [];
  public entree = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public donnees: ServiceDonneesProvider) {
    this.donnees.getSeries().subscribe((listMovies) => {
      this.data = listMovies;
    });
  }

  public search() {
    this.donnees.searchMovies(this.entree, 'series').subscribe((listMovies) => {
      this.data = listMovies;
    });
  }


  public itemTapped(event, exemple) {
    this.navCtrl.push(DetailsPage, {
      item: exemple.imdbID
    });
  }


}
