
import { Component, ComponentRef, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';


import { PokemonDetail } from 'src/app/pokemon/interfaces/pokeDetails';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.scss']
})
export class ViewMoreComponent  {

  pokemon: PokemonDetail;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.pokemon = data.pokemon;
    console.log(this.pokemon)
  }


  getAbilities(): string{
    return this.pokemon.abilities.map( x => x.ability.name).join(', ')
  }


}


