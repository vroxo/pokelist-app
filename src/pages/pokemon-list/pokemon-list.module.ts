import { PokemonList } from './pokemon-list';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    PokemonList,
  ],
  imports: [
    IonicPageModule.forChild(PokemonList),
  ],
  exports: [
    PokemonList
  ]
})
export class PokemonListModule {}
