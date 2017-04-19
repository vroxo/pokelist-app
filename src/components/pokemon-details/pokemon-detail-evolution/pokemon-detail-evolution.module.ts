import { PokemonDetailEvolution } from './pokemon-detail-evolution';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';


@NgModule({
  declarations: [
    PokemonDetailEvolution,
  ],
  imports: [
    IonicModule.forRoot(PokemonDetailEvolution),
  ],
  exports: [
    PokemonDetailEvolution
  ]
})
export class PokemonDetailEvolutionModule {}
