import { PokemonDetailSpecies } from './pokemon-detail-species';

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';


@NgModule({
  declarations: [
    PokemonDetailSpecies,
  ],
  imports: [
    IonicModule.forRoot(PokemonDetailSpecies),
  ],
  exports: [
    PokemonDetailSpecies
  ]
})
export class PokemonDetailSpeciesModule {}
