
import { Pokemon } from '../../interfaces/pokemons.interfaces';
import { PokemonService } from '../../services/pokemon.service';
import {  Component,  OnInit } from '@angular/core';


import { ViewMoreComponent } from './components/view-more/view-more.component';

import { PokemonDetail } from '../../interfaces/pokeDetails';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit  {

  public pokemons: Pokemon[] = [];
  public page: number = 1;
  public favPokemons  : any [] =[];

  filter = '';
  pokemon : PokemonDetail [] = [];

  


  constructor(
    private pokemonServ : PokemonService,
    public dialog : MatDialog
   
    ) {}


  

    
  ngOnInit(): void {
  
    this.page
    this.favPokemons = JSON.parse(localStorage.getItem('data')!);
    if (!this.favPokemons){
      this.favPokemons = []
    }

    this.pokemonServ.getAllPokemons()
    .subscribe( (res : any) => {
      res.results.forEach((result: { name: string | number; }) => {
        this.pokemonServ.getPokemonDetail(result.name)
          .subscribe((res : any) => {
            this.pokemons.push(res);
          })
      })
    });
    console.log(this.favPokemons)
  }


 
  openDialog(pokemon : PokemonDetail) {
   this.dialog.open(ViewMoreComponent, {
    data: {pokemon}
   })
  }


 
  setPokemon () {
    try {
      let data =[...this.pokemons].sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, 3);
      if(data){
        localStorage.setItem('data', JSON.stringify(data))

      }
      this.favPokemons = JSON.parse(localStorage.getItem('data')!);
    } catch (error) {
        console.log("local storage full")
    }
    console.log(this.favPokemons)
  }

  getPrincipalType(list: any[]) {
    return list.filter(x => x.slot === 1)[0]?.type.name;
  }

}