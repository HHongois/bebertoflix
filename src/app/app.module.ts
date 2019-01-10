import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FavorisPageModule } from './../pages/favoris/favoris.module';
import { EpisodePageModule } from './../pages/episode/episode.module';
import { ListEpisodesPageModule } from './../pages/list-episodes/list-episodes.module';
import { DetailsPageModule } from './../pages/details/details.module';
import { SeriePageModule } from './../pages/serie/serie.module';
import { FilmPageModule } from './../pages/film/film.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { ServiceDonneesProvider } from '../providers/service-donnees/service-donnees';
import { HttpClientModule } from '@angular/common/http';
import { SauvegardeProvider } from '../providers/sauvegarde/sauvegarde';
import { LienWebProvider } from '../providers/lien-web/lien-web'; 

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    FilmPageModule,
    SeriePageModule,
    DetailsPageModule,
    ListEpisodesPageModule,
    EpisodePageModule,
    FavorisPageModule,
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceDonneesProvider,
    SauvegardeProvider,
    InAppBrowser,
    LienWebProvider
  ]
})
export class AppModule {}
