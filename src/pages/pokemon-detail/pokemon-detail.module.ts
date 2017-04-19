import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PokemonDetail } from './pokemon-detail';

@NgModule({
  declarations: [
    PokemonDetail,
  ],
  imports: [
    IonicPageModule.forChild(PokemonDetail),
  ],
  exports: [
    PokemonDetail
  ]
})
export class PokemonDetailModule {}
