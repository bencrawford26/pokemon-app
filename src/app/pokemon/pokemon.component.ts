import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.get151Pokemon();
  }

  getPokemon(id: number): void {
    this.pokemonService.updatePokemon(id);
  }
}
