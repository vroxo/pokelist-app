import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { About } from '../pages/about/about';
import { PokemonList } from '../pages/pokemon-list/pokemon-list';
import { TypeList } from '../pages/type-list/type-list';

@Component({
  template: `
  <ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>
    </ion-menu>
    <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>
  `
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = PokemonList;

  pages: Array<{title: string, component: any}>;

   constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
      });

       this.pages = [
          { title: 'Pokélist', component: PokemonList },
          { title: 'Pokémon Types', component: TypeList },
          { title: 'About', component: About }
        ];
 
    }

  openPage(page) {
    this.nav.setRoot(page.component);
    //this.nav.push(page.component); //temporary - ios bug
  }
}
