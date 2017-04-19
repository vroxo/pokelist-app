import { Component, Input, OnChanges } from '@angular/core';

import { Utilities } from '../../../util/utilities';

@Component({
  selector: 'pokemon-detail-moves',
  templateUrl: 'pokemon-detail-moves.html'
})
export class PokemonDetailMoves implements OnChanges {

  @Input() pokemon: any;

  move: string = 'levelUp';

  levelUp: any[] = [];
  egg: any[] = [];
  tm: any[] = [];
  tutor: any[] = [];

  constructor(private util: Utilities) {}

  ngOnChanges(){
    if (this.pokemon){
      this.levelUp = [];
      this.egg = [];
      this.tm = [];
      this.tutor = [];

      let infoList = this.pokemon.moves;
      let item: any;
      for (let i=0; i<infoList.length; i++){
        item = infoList[i];
        let list: any[] = item.version_group_details;
        let groupDetails;

        for (let i=0; i<list.length; i++){
          groupDetails = list[i];

          if (groupDetails.move_learn_method.name === 'egg'){

            this.addIfGenerationIVorVI(groupDetails, item, this.egg);

          } else if (groupDetails.move_learn_method.name === 'machine'){

            //console.log(item);

            this.addUnique(this.tm, item);

          } else if (groupDetails.move_learn_method.name === 'tutor'){

            if (this.isGenerationVI(groupDetails)){
              this.addUnique(this.tutor, item);
            }

          } else if (groupDetails.move_learn_method.name === 'level-up'){


            if (this.isGenerationIV(groupDetails)){

              item.groupDetails = groupDetails;
              this.addUnique(this.levelUp, item);

              //console.log(item.move.name + ' - ' + groupDetails.version_group.name + ' - ' + groupDetails.level_learned_at);
            }
          }
        }
      }

      this.sortLevelUp();
      this.sortAlphabetically(this.tm);
      this.sortAlphabetically(this.egg);
      this.sortAlphabetically(this.tutor);
    }
  }

  isGenerationIV(groupDetails){
    if (groupDetails.version_group.name === 'platinum'
     || groupDetails.version_group.name === 'diamond-pearl'
     || groupDetails.version_group.name === 'heartgold-soulsilver'){
      return true;;
    }
    return false;
  }

  isGenerationVI(groupDetails){
    if (groupDetails.version_group.name === 'x-y'
     || groupDetails.version_group.name === 'omega-ruby-alpha-sapphire'){
      return true;;
    }
    return false;
  }

  addIfGenerationIVorVI(groupDetails, item, list){
    if (this.isGenerationIV(groupDetails) ||
        this.isGenerationVI(groupDetails)){
      this.addUnique(list, item);
    }
  }

  addUnique(list, item){
    if (!this.util.contains(list, item)) {
      list.push(item);
    }
  }

  sortLevelUp(){
    this.levelUp.sort(function(a, b){
      return a.groupDetails.level_learned_at - b.groupDetails.level_learned_at;
    });
  }

  sortAlphabetically(list){
    list.sort(function(a, b){
      if (a.move.name < b.move.name){
          return -1;
      } else if (a.move.name > b.move.name){
          return 1;
      } else {
          return 0;
      }
    });
  }
}