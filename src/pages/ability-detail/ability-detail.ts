import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { PokelistService } from './../../providers/pokelist-service';

@IonicPage()
@Component({

  templateUrl: 'ability-detail.html',
})
export class AbilityDetail {

  ability: any = {};

  constructor(
    private navParams: NavParams,
    private navCtrl: NavController,
    private pokedexService: PokelistService
  ) {  }

  ngOnInit() {
    let id = this.navParams.data.id;
    this.pokedexService.getAbility(id)
      .subscribe(data => {
        this.ability = data;
        console.log(this.ability);
      });
  }

}
