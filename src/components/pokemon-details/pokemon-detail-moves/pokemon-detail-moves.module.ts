import { PokemonDetailMoves } from './pokemon-detail-moves';

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';


@NgModule({
  declarations: [
    PokemonDetailMoves,
  ],
  imports: [
    IonicModule.forRoot(PokemonDetailMoves),
  ],
  exports: [
    PokemonDetailMoves
  ]
})
export class PokemonDetailMovesModule {}
