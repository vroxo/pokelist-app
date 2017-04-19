import { PokemonDetailTypeEffectiveness } from './pokemon-detail-type-effectiveness';

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';


@NgModule({
  declarations: [
    PokemonDetailTypeEffectiveness,
  ],
  imports: [
    IonicModule.forRoot(PokemonDetailTypeEffectiveness),
  ],
  exports: [
    PokemonDetailTypeEffectiveness
  ]
})
export class PokemonDetailTypeEffectivenessModule {}
