import { Component } from '@angular/core';

/**
 * Generated class for the PokemonDetailTypeEffectiveness component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'pokemon-detail-type-effectiveness',
  templateUrl: 'pokemon-detail-type-effectiveness.html'
})
export class PokemonDetailTypeEffectiveness {

  text: string;

  constructor() {
    console.log('Hello PokemonDetailTypeEffectiveness Component');
    this.text = 'Hello World';
  }

}
