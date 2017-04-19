import { Component, Input, OnChanges } from '@angular/core';
import { PokelistService } from './../../../providers/pokelist-service';

import { Utilities } from '../../../util/utilities';

@Component({
  selector: 'pokemon-detail-evolution',
  templateUrl: 'pokemon-detail-evolution.html'
})
export class PokemonDetailEvolution implements OnChanges {

    @Input() pokemon: any;
    evolutionDetails: any;
    evolutions: any[] = [];

    constructor(
      private pokedexService: PokelistService,
      private util: Utilities
    ) {}

    ngOnChanges(){
      let speciesId: number = this.util.retrieveIdFromUrl(this.pokemon.species.url, 'pokemon-species');
      this.pokedexService.getSpecies(speciesId)
        .subscribe(speciesDetails => this.loadEvolutionDetails(speciesDetails));
    }

    loadEvolutionDetails(speciesDetails){
      let id: number = this.util.retrieveIdFromUrl(speciesDetails.evolution_chain.url, 'evolution-chain');
      this.pokedexService.getEvolution(id)
        .subscribe(data => this.loadEvolutions(data));
    }

    loadEvolutions(data){
      this.evolutionDetails = data;
      this.evolutions = [];
      let item = this.evolutionDetails.chain.evolves_to[0];
      while (item){
        let ev: any = {};
        ev.name = item.species.name;
        ev.id = this.util.retrieveIdFromUrl(item.species.url, 'pokemon-species');
        ev.level = item.evolution_details[0].min_level;
        this.evolutions.push(ev);
        item = item.evolves_to[0];
      }
    }
}
