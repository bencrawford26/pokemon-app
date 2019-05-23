import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';


@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  constructor(private pokemonService: PokemonService, public dialog: MatDialog) { }

  ngOnInit() {
  }
  
  openDialog(pokemon: Pokemon): void {
    this.pokemonService.pokemon = pokemon;
    const dialogRef = this.dialog.open(PokemonDetailComponent, {
      width: '90vw'
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.from = result.from;
    //   this.to = result.to;
    //   this.pokemonService.filterListByHeightWeight(this.from, this.to, option);
    // });
  }

}
