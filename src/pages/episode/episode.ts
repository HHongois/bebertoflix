import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceDonneesProvider } from '../../providers/service-donnees/service-donnees';

/**
 * Generated class for the EpisodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-episode',
  templateUrl: 'episode.html',
})
export class EpisodePage {

  public data:Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public donnees:ServiceDonneesProvider) {
    // this.donnees.getDetails(this.navParams.get('exemple')).subscribe((episode) => {
    //   this.data = episode;      
    // });
  }


}
