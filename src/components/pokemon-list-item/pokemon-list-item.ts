import { Component } from '@angular/core';

/**
 * Generated class for the PokemonListItem component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'pokemon-list-item',
  templateUrl: 'pokemon-list-item.html'
})
export class PokemonListItem {

  text: string;

  constructor() {
    console.log('Hello PokemonListItem Component');
    this.text = 'Hello World';
  }

}
