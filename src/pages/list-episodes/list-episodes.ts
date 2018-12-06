import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceDonneesProvider } from '../../providers/service-donnees/service-donnees';

/**
 * Generated class for the ListEpisodesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-episodes',
  templateUrl: 'list-episodes.html',
})
export class ListEpisodesPage {

  public data:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public donnees:ServiceDonneesProvider) {
    this.donnees.searchSeries(this.navParams.get('item'),this.navParams.get('numSaison')).subscribe((listEpisodes) => {
      this.data = listEpisodes;      
    });
  }

  public itemTapped(event, exemple) {
    this.navCtrl.push(ListEpisodesPage, {
      item: exemple
    });
  }
}
