import { Component } from '@angular/core';

/**
 * Generated class for the PokemonDetailSprites component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'pokemon-detail-sprites',
  templateUrl: 'pokemon-detail-sprites.html'
})
export class PokemonDetailSprites {

  text: string;

  constructor() {
    console.log('Hello PokemonDetailSprites Component');
    this.text = 'Hello World';
  }

}
