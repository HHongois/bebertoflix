import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceDonneesProvider } from './../../providers/service-donnees/service-donnees';

@IonicPage()
@Component({
  selector: 'page-film',
  templateUrl: 'film.html',
})
export class FilmPage {

  public data:Array<Object> = [];
  public entree = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,public donnees:ServiceDonneesProvider) {
    this.donnees.getMovies().subscribe((listMovies) =>{
            this.data = listMovies;
          });
  }

    public search(){
    this.donnees.searchMovies(this.entree,'movie').subscribe((listMovies) => {
      this.data = listMovies;
    });
  }

  public itemTapped(event, exemple) {
    this.navCtrl.push(DetailsPage, {
      item: exemple.imdbID
    });
  }

}
