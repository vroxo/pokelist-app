import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PokemonDetailMoveDetailRow } from './pokemon-detail-move-detail-row';

@NgModule({
  declarations: [
    PokemonDetailMoveDetailRow,
  ],
  imports: [
    IonicModule.forChild(PokemonDetailMoveDetailRow),
  ],
  exports: [
    PokemonDetailMoveDetailRow
  ]
})
export class PokemonDetailMoveDetailRowModule {}
