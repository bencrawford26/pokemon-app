import { Component, OnInit } from '@angular/core';
import { PokemonNames } from '../pokemon-names';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemonNames: PokemonNames[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemonNames();
  }

  getPokemonNames(): void {
    this.pokemonService.getPokemonNames()
      .subscribe(response => this.pokemonNames = response.results);
  }

  getPokemon(id: number): void {
    this.pokemonService.updatePokemon(id);
  }
}
