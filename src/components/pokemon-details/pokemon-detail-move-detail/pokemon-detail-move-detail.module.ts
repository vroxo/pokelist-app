import { PokemonDetailMoveDetail } from './pokemon-detail-move-detail';


import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';


@NgModule({
  declarations: [
    PokemonDetailMoveDetail,
  ],
  imports: [
    IonicModule.forRoot(PokemonDetailMoveDetail),
  ],
  exports: [
    PokemonDetailMoveDetail
  ]
})
export class PokemonDetailMoveDetailModule {}
