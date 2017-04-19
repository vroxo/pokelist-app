import { Component } from '@angular/core';

/**
 * Generated class for the PokemonDetailMoveDetail component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'pokemon-detail-move-detail',
  templateUrl: 'pokemon-detail-move-detail.html'
})
export class PokemonDetailMoveDetail {

  text: string;

  constructor() {
    console.log('Hello PokemonDetailMoveDetail Component');
    this.text = 'Hello World';
  }

}
