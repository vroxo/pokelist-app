import { PokemonDetailStatsItem } from './pokemon-detail-stats-item';

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';


@NgModule({
  declarations: [
    PokemonDetailStatsItem,
  ],
  imports: [
    IonicModule.forRoot(PokemonDetailStatsItem),
  ],
  exports: [
    PokemonDetailStatsItem
  ]
})
export class PokemonDetailStatsModule {}
