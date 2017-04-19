import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PokemonDetailEvolution } from './pokemon-detail-evolution';

@NgModule({
  declarations: [
    PokemonDetailEvolution,
  ],
  imports: [
    IonicModule.forChild(PokemonDetailEvolution),
  ],
  exports: [
    PokemonDetailEvolution
  ]
})
export class PokemonDetailEvolutionModule {}
