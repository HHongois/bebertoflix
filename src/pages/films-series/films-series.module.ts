import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmsSeriesPage } from './films-series';

@NgModule({
  declarations: [
    FilmsSeriesPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmsSeriesPage),

  ],
})
export class FilmsSeriesPageModule {}
