import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ListResponse } from './list-response';
import { Pokemon } from './pokemon';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private pokeUrl = "https://pokeapi.co/api/v2/"; //URL To Pokémon api.

  pokemon: Pokemon;


  constructor(
    private http: HttpClient,
  ) { }

  /** GET list of 151 Pokémon names and urls from server */
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
    this.getPokemon(id).subscribe(pkmn => this.pokemon = pkmn);
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
