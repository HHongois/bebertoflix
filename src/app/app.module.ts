import { ListEpisodesPageModule } from './../pages/list-episodes/list-episodes.module';
import { DetailsPageModule } from './../pages/details/details.module';
import { DetailsPage } from './../pages/details/details';
import { SeriePageModule } from './../pages/serie/serie.module';
import { FilmPageModule } from './../pages/film/film.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ServiceDonneesProvider } from '../providers/service-donnees/service-donnees';
import { HttpClientModule } from '@angular/common/http'; 

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
    ListEpisodesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceDonneesProvider
  ]
})
export class AppModule {}
