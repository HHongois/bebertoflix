import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListEpisodesPage } from './list-episodes';

@NgModule({
  declarations: [
    ListEpisodesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListEpisodesPage),
  ],
})
export class ListEpisodesPageModule {}
