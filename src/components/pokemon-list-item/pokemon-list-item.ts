import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'pokemon-list-item',
  templateUrl: 'pokemon-list-item.html'
})
export class PokemonListItem {

  @Input() pokemon: any;
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  getPokemonTypes(){
    let types: any[] = [];
    if (this.pokemon && this.pokemon.types) {
      let type: any;
      for (let i=0; i<this.pokemon.types.length; i++){
        type = this.pokemon.types[i];
        if (type){
          types.splice((type.slot-1), 0, type);
        }
      }
    }
    if (types.length > 0){
      this.pokemon.types = types;
    }
    return types;
  }

  goToPokemonDetail(){
    this.clicked.emit({pokemon: this.pokemon});
  }
}
