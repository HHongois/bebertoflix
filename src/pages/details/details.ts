import { SauvegardeProvider } from './../../providers/sauvegarde/sauvegarde';
import { ListEpisodesPage } from './../list-episodes/list-episodes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceDonneesProvider } from '../../providers/service-donnees/service-donnees';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  public data: Object;
  public saison: Array<number> = [];
  public favoris: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public donnees: ServiceDonneesProvider,public sauvegarde: SauvegardeProvider) {
    this.donnees.getDetails(this.navParams.get('item')).subscribe((listDetails) => {
      this.data = listDetails;
      if (this.data['totalSeasons']) {
        this.saison = new Array(parseInt(this.data['totalSeasons']));
        this.saison = this.saison.fill(0).map((el, index) => {
          return index + 1;
        });
      }
    });
  }



  public itemTapped(event, exemple, i) {
    this.navCtrl.push(ListEpisodesPage, {
      item: exemple,
      numSaison: i
    });
  }
  public saveFavoris(){
    if (this.favoris) {
      this.favoris = false;
      this.sauvegarde.removeFavoris(this.data);
    } else {
      this.favoris = true;
      this.sauvegarde.addFavoris(this.data);
    }
  }

}
