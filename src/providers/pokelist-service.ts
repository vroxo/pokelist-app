import { TypeList } from './../pages/type-list/type-list';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
/*
  Generated class for the PokelistService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PokelistService {

  private pokemons: any[];
  private pokemonSpecies: any[];
  private pokemonEvolutions: any[];
  private pokemonTypes: any[];
  private pokemonAbilities: any[];

  private moves: any[];

  private baseUrl: string;

  constructor(public http: Http) {
    this.baseUrl = 'assets/data/v2/';
  }

  initData(){
    let requestArray = [];
    requestArray.push(this.getAllSpecies());
    requestArray.push(this.getTypes());
    requestArray.push(this.getMoves());
    //requestArray.push(this.getAbilities());
    this.doMultipleRequests(requestArray)
      .subscribe(data => null);
  }

  getAllPokemon(){
    if(this.pokemons){
      return Observable.of(this.pokemons);
    }else{
      return this.http.get(this.baseUrl+'pokemon.json')
        .map((res: Response) => res.json().results)
        .do((data) => {this.pokemons = data; })
        .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }
  }

 getPokemon(id: number){
    return this.getAllPokemon().map((res: any) => res[id-1]);
  }

  getAllSpecies(){
    if(this.pokemonSpecies){
      return Observable.of(this.pokemonSpecies)
    }else{
      return this.http.get(this.baseUrl  + 'pokemon-species.json')
                .map((res: Response) => res.json().results)
                .do((data) => { this.pokemonSpecies = data; })
                .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }
  }

  getSpecies(id: number){
    return this.getAllSpecies()
      .map((res: any) => res[id-1]);
  }

  getEvolutions(){
    if(this.pokemonEvolutions){
      return Observable.of(this.pokemonEvolutions)
    }else{
      return this.http.get(this.baseUrl  + 'evolutions.json')
                .map((res: Response) => res.json().results)
                .do((data) => { this.pokemonEvolutions = data; })
                .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }
  }

  getEvolution(id: number){
    return this.getEvolutions()
      .map((res: any) => res[id-1]);    
  }

  getTypes(){
    if(this.pokemonTypes){
      return Observable.of(this.pokemonTypes)
    }else{
      return this.http.get(this.baseUrl  + 'types.json')
                .map((res: Response) => res.json().results)
                .do((data) => { this.pokemonTypes = data; })
                .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }
  }

  getType(id: number){
    return this.getTypes()
      .map((res: any) => res[id-1]);    
  }

  doMultipleRequests(observableBatch: any[]){
    return Observable.forkJoin(observableBatch);
  }

  getMoves(){
    if (this.moves) {
      return Observable.of(this.moves);
    } else {
      return this.http.get(this.baseUrl  + 'moves.json')
              .map((res: Response) => res.json().results)
              .do((data) => { this.moves = data; });
    }
  }

  getMove(id: number){
    return this.getMoves().map((res: any) => res[id-1]);
  }

  getAbilities(){
    if (this.pokemonAbilities) {
      return Observable.of(this.pokemonAbilities);
    } else {
      return this.http.get(this.baseUrl  + 'abilities.json')
              .map((res: Response) => res.json().results)
              .do((data) => { this.pokemonAbilities = data; });
    }
  }

  getAbility(id: number){
    return this.getAbilities().map((res: any) => res[id-1]);
  }
}
