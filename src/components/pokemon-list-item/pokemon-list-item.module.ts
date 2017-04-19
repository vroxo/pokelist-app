import { PokemonListItem } from './pokemon-list-item';

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';


@NgModule({
  declarations: [
    PokemonListItem,
  ],
  imports: [
    IonicModule.forRoot(PokemonListItem),
  ],
  exports: [
    PokemonListItem
  ]
})
export class PokemonListItemModule {}
