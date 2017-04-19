import { Component } from '@angular/core';

/**
 * Generated class for the PokemonDetailStats component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'pokemon-detail-stats',
  templateUrl: 'pokemon-detail-stats.html'
})
export class PokemonDetailStats {

  text: string;

  constructor() {
    console.log('Hello PokemonDetailStats Component');
    this.text = 'Hello World';
  }

}
