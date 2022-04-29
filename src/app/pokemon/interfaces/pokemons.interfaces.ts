 export interface AllPokemons {
    count: number;
    next: null;
    previous: null;
    results: dataPokemon[];
}

export interface dataPokemon{
    name: string;
    url: string
}

export interface Pokemon {
    moves(moves: any): import("rxjs").Observable<import("./pokeDetails").PokemonDetail>;
    id: string;
    name: string;
    pic: string;
}