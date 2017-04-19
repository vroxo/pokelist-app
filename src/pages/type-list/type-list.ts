import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { PokelistService } from './../../providers/pokelist-service';

@IonicPage()
@Component({
  templateUrl: 'type-list.html'
})
export class TypeList {

  private types: any[] = [];

  constructor(
    private navCtrl: NavController,
    private pokedexService: PokelistService
  ) {}

  ngOnInit(){
    this.pokedexService.getTypes()
      .subscribe(types => this.types = types);
  }

}
