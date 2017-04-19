import { PokemonDetailMoveDetailRow } from './pokemon-detail-move-detail-row';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';


@NgModule({
  declarations: [
    PokemonDetailMoveDetailRow,
  ],
  imports: [
    IonicModule.forRoot(PokemonDetailMoveDetailRow),
  ],
  exports: [
    PokemonDetailMoveDetailRow
  ]
})
export class PokemonDetailMoveDetailRowModule {}
