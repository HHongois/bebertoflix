import { LienWebProvider } from './../../providers/lien-web/lien-web';
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


  constructor(public navCtrl: NavController, public navParams: NavParams, public donnees: ServiceDonneesProvider, public sauvegarde: SauvegardeProvider,public lien:LienWebProvider) {
    this.sauvegarde.getSauvegarde()
      .then(
        (result) => {
          this.donnees.getDetails(this.navParams.get('item')).subscribe((listDetails) => {
            this.data = listDetails;
            if(this.data['Type'] !== "movie"){
              if (this.data['totalSeasons'] !== 'N/A') {
                this.saison = new Array(parseInt(this.data['totalSeasons']));
                this.saison = this.saison.fill(0).map((el, index) => {
                  return index + 1;
                });
              }
            }            
          });
          this.isFavoris(result);
        });
  }
  
   openLink(url: string){
    this.lien.openWithSystemBrowser(url);
  }

  public isFavoris(tab2: any) {
    for (let i of tab2) {
      if (i.imdbID == this.navParams.get('item')) {
        this.favoris = true;
        break;
      }
    }

  }

  public itemTapped(event, exemple, i) {
    this.navCtrl.push(ListEpisodesPage, {
      item: exemple,
      numSaison: i
    });
  }

  public saveFavoris() {
    if (this.favoris) {
      this.favoris = false;
      this.sauvegarde.removeFavoris(this.data);
    } else {
      this.favoris = true;
      this.sauvegarde.addFavoris(this.data);
    }
  }

}
