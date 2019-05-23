import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';


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

}