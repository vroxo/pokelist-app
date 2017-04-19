import { PokemonDetailAbilities } from './pokemon-detail-abilities';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';


@NgModule({
  declarations: [
    PokemonDetailAbilities,
  ],
  imports: [
    IonicModule.forRoot(PokemonDetailAbilities),
  ],
  exports: [
    PokemonDetailAbilities
  ]
})
export class PokemonDetailAbilitiesModule {}
