import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

/*
  Generated class for the LienWebProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LienWebProvider {

  options: InAppBrowserOptions = {
    location: 'yes',
    hidden: 'no', 
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no',
    closebuttoncaption: 'Close', 
    disallowoverscroll: 'no',  
    toolbar: 'yes',  
    enableViewportScale: 'no',  
    allowInlineMediaPlayback: 'no', 
    presentationstyle: 'pagesheet', 
    fullscreen: 'yes',    
  };
  constructor(public http: HttpClient, private iab: InAppBrowser) {
    console.log('Hello LienWebProvider Provider');
  }

   openWithSystemBrowser(url: string) {
    let target = "_system";
    this.iab.create(url, target, this.options);
  }
}
