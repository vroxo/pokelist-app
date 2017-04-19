import { Component } from '@angular/core';

/**
 * Generated class for the PokemonDetailAbilities component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'pokemon-detail-abilities',
  templateUrl: 'pokemon-detail-abilities.html'
})
export class PokemonDetailAbilities {

  text: string;

  constructor() {
    console.log('Hello PokemonDetailAbilities Component');
    this.text = 'Hello World';
  }

}
