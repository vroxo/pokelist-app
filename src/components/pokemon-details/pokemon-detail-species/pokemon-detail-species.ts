import { Component } from '@angular/core';

/**
 * Generated class for the PokemonDetailSpecies component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'pokemon-detail-species',
  templateUrl: 'pokemon-detail-species.html'
})
export class PokemonDetailSpecies {

  text: string;

  constructor() {
    console.log('Hello PokemonDetailSpecies Component');
    this.text = 'Hello World';
  }

}
