import { PokemonDetailSprites } from './pokemon-detail-sprites';

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';


@NgModule({
  declarations: [
    PokemonDetailSprites,
  ],
  imports: [
    IonicModule.forRoot(PokemonDetailSprites),
  ],
  exports: [
    PokemonDetailSprites
  ]
})
export class PokemonDetailSpritesModule {}
