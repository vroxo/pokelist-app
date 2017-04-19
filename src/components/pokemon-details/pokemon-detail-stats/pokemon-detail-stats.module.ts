import { PokemonDetailStats } from './pokemon-detail-stats';

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';


@NgModule({
  declarations: [
    PokemonDetailStats,
  ],
  imports: [
    IonicModule.forRoot(PokemonDetailStats),
  ],
  exports: [
    PokemonDetailStats
  ]
})
export class PokemonDetailStatsModule {}
