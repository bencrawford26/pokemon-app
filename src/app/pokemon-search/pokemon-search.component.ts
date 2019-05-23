import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
  }

  search(searchTerm: string): void {
    this.pokemonService.filterListByName(searchTerm);
  }

}
