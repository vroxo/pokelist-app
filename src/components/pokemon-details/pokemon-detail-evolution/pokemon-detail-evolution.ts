import { Component } from '@angular/core';

/**
 * Generated class for the PokemonDetailEvolution component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'pokemon-detail-evolution',
  templateUrl: 'pokemon-detail-evolution.html'
})
export class PokemonDetailEvolution {

  text: string;

  constructor() {
    console.log('Hello PokemonDetailEvolution Component');
    this.text = 'Hello World';
  }

}
