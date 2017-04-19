import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { PokelistService } from './../../providers/pokelist-service';

@IonicPage()
@Component({
  templateUrl: 'pokemon-detail.html'
})
export class PokemonDetail implements OnInit {

  private pokemon: any = {};

  constructor(
    private navParams: NavParams,
    private navCtrl: NavController,
    private pokedexService: PokelistService
  ) {  }

  ngOnInit() {
    this.pokemon = this.navParams.data.pokemon;
  }

  getId(){
    return this.pokemon.id;
  }

  goToPreviousPokemon(){
    //console.log('currentId = ' + this.getId());
    if (this.getId() >= 2){
      let newId = this.getId() - 1;
      //console.log('newid = ' + newId);
      this.changePokemonData(newId);
    }
  }

  goToNextPokemon(){
    //console.log('currentId = ' + this.getId());
    if (this.getId() < 151){
      let newId = this.getId() + 1;
      //console.log('newid = ' + newId);
      this.changePokemonData(newId);
    }
  }

  private changePokemonData(id: number){
    this.pokedexService.getPokemon(id)
      .subscribe(data => this.pokemon = data);
  }

}
