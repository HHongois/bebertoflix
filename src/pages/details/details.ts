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

  public data:Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public donnees:ServiceDonneesProvider) {
    this.donnees.getDetails(this.navParams.get('item')).subscribe((listDetails) =>{
      this.data = listDetails;
    });  }

 

}
