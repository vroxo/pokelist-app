import { Component } from '@angular/core';

/**
 * Generated class for the PokemonDetailStatsItem component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'pokemon-detail-stats-item',
  templateUrl: 'pokemon-detail-stats-item.html'
})
export class PokemonDetailStatsItem {

  text: string;

  constructor() {
    console.log('Hello PokemonDetailStatsItem Component');
    this.text = 'Hello World';
  }

}
