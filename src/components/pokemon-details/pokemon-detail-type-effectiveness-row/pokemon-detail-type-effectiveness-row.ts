import { Component } from '@angular/core';

/**
 * Generated class for the PokemonDetailTypeEffectivenessRow component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'pokemon-detail-type-effectiveness-row',
  templateUrl: 'pokemon-detail-type-effectiveness-row.html'
})
export class PokemonDetailTypeEffectivenessRow {

  text: string;

  constructor() {
    console.log('Hello PokemonDetailTypeEffectivenessRow Component');
    this.text = 'Hello World';
  }

}
