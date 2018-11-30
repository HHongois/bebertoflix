import { SeriePage } from './../serie/serie';
import { FilmPage } from './../film/film';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-films-series',
  templateUrl: 'films-series.html',
})
export class FilmsSeriesPage {
  filmRoot = FilmPage;
  serieRoot = SeriePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmsSeriesPage');
  }

}
