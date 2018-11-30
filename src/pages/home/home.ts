import { ServiceDonneesProvider } from './../../providers/service-donnees/service-donnees';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

public data:Array<Object> = [];
public entree = ''; 

  constructor(public navCtrl: NavController,public donnees:ServiceDonneesProvider) {

    this.donnees.getMovies().subscribe((listMovies) =>{
      this.data = listMovies;
    });
  }

  public search(){
    this.donnees.searchMovies(this.entree).subscribe((listMovies) => {
      this.data = listMovies;
    });
  }

  itemTapped(event, exemple) {
    this.navCtrl.push(HomePage, {
      item: exemple
    });
  }

}
