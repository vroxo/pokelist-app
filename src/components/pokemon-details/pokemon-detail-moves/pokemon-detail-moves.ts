import { Component } from '@angular/core';

/**
 * Generated class for the PokemonDetailMoves component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'pokemon-detail-moves',
  templateUrl: 'pokemon-detail-moves.html'
})
export class PokemonDetailMoves {

  text: string;

  constructor() {
    console.log('Hello PokemonDetailMoves Component');
    this.text = 'Hello World';
  }

}
