import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonDetail } from '../interfaces/pokeDetails';
import { AllPokemons, Pokemon } from '../interfaces/pokemons.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = 'https://pokeapi.co/api/v2/';

  constructor( 
    private http: HttpClient
    ) { }


  getAllPokemons(){
    return this.http.get(`${environment.BaseURL}/pokemon?limit=1126`)
  }



getPokemonDetail(pokemon: number | string): Observable<PokemonDetail> {
  return this.http.get<PokemonDetail>(this.baseUrl + 'pokemon/' + pokemon);
}


}
