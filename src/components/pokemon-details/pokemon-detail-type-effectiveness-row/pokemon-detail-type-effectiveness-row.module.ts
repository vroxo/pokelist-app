import { PokemonDetailTypeEffectivenessRow } from './pokemon-detail-type-effectiveness-row';

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';


@NgModule({
  declarations: [
    PokemonDetailTypeEffectivenessRow,
  ],
  imports: [
    IonicModule.forRoot(PokemonDetailTypeEffectivenessRow),
  ],
  exports: [
    PokemonDetailTypeEffectivenessRow
  ]
})
export class PokemonDetailTypeEffectivenessRowModule {}
