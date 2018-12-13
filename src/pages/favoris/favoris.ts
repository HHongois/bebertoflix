import { SauvegardeProvider } from './../../providers/sauvegarde/sauvegarde';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FavorisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoris',
  templateUrl: 'favoris.html',
})
export class FavorisPage {

  public data: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public sauvegarde: SauvegardeProvider) {


  }
public ionViewDidEnter(){
  this.sauvegarde.getSauvegarde()
  .then(
    (result) => {
      this.data = result
    });

}

}