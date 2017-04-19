import { Component } from '@angular/core';

/**
 * Generated class for the PokemonDetailMoveDetailRow component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'pokemon-detail-move-detail-row',
  templateUrl: 'pokemon-detail-move-detail-row.html'
})
export class PokemonDetailMoveDetailRow {

  text: string;

  constructor() {
    console.log('Hello PokemonDetailMoveDetailRow Component');
    this.text = 'Hello World';
  }

}
