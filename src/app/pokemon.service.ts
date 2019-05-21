import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { ListResponse } from './list-response';
import { Pokemon } from './pokemon';


@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private pokeUrl = "https://pokeapi.co/api/v2/"; //URL To Pokémon api.

  pokemon: Pokemon;
  pokemonList: Pokemon[] = [];
  typesList: string[] = [];
  tempPokemonList: Pokemon[] = [];


  constructor(private http: HttpClient) { }

  /** GET full details of each Pokémon from api */
  get151Pokemon(): void {
    this.getPokemonNames().subscribe(pkmn => {
      for (let i = 0; i < pkmn.results.length; i++) {
        this.getPokemon(i + 1).subscribe(pokemon => {
          this.pokemonList.push(pokemon);
          this.sortPokemon();
          this.checkTypes(pokemon);
        });
      }
    });
  }

  /** GET list of 151 Pokémon names and urls from api */
  getPokemonNames(): Observable<ListResponse> {
    const url = `${this.pokeUrl}pokemon/?limit=151`;

    return this.http.get<ListResponse>(url).pipe(
      catchError(this.handleError<ListResponse>('getPokemonNames'))
    );
  }

  /**GET specific pokemon by id */
  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokeUrl}pokemon/${id}`;

    return this.http.get<Pokemon>(url).pipe(
      catchError(this.handleError<Pokemon>('getPokemon'))
    );
  }

  updatePokemon(id: number): void {
    for (let i = 0; i < this.pokemonList.length; i++) {
      if (this.pokemonList[i].id == id) this.pokemon = this.pokemonList[i];
    }
  }


  sortPokemon(): void {
    this.pokemonList.sort((n1, n2) => {
      if (n1.id > n2.id) {
        return 1;
      }

      if (n1.id < n2.id) {
        return -1;
      }

      return 0;
    });
  }

  checkTypes(pokemon: Pokemon): void {
    for (let i = 0; i < pokemon.types.length; i++) {
      if (!this.typesList.includes(pokemon.types[i].type.name)) this.typesList.push(pokemon.types[i].type.name);
    }
  }

  filterListByType(type: string): void {
    this.clearFilters();
    var listByType: Pokemon[] = [];
    this.tempPokemonList = this.pokemonList;

    for (let i = 0; i < this.pokemonList.length; i++) {
      for (let j = 0; j < this.pokemonList[i].types.length; j++) {
        if (this.pokemonList[i].types[j].type.name == type) listByType.push(this.pokemonList[i]);
      }
    }

    this.pokemonList = listByType;
  }

  filterListByHeightWeight(from: number, to: number, option: string): void {
    this.clearFilters();
    var listByHeihtWeight: Pokemon[] = [];
    this.tempPokemonList = this.pokemonList;

    for (let i = 0; i < this.pokemonList.length; i++) {
      if(option == 'Height') {
        if (this.pokemonList[i].height >= from && this.pokemonList[i].height <= to) listByHeihtWeight.push(this.pokemonList[i]);
      } else {
        if (this.pokemonList[i].weight >= from*10 && this.pokemonList[i].weight <= to*10) listByHeihtWeight.push(this.pokemonList[i]);
      }
      
    }

    this.pokemonList = listByHeihtWeight;

  }

  clearFilters(): void {
    if(this.tempPokemonList.length == 0) {
      this.tempPokemonList = this.pokemonList;
    } else {
      this.pokemonList = this.tempPokemonList;
    }
  }


  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
