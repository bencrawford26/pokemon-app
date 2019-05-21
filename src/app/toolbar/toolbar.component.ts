import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  
  title = 'Pokémon App';

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
  }

  filterList(type: string): void {
    this.pokemonService.filterListByType(type);
  }

}
