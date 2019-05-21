import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PokemonService } from '../pokemon.service';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  title = 'Pokémon App';
  filterOptions: string[] = ["Height", "Weight"];

  from: number;
  to: number;

  constructor(private pokemonService: PokemonService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(option: string): void {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '250px',
      data: { from: this.from, to: this.to, option: option }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.from = result.from;
      this.to = result.to;
      this.pokemonService.filterListByHeightWeight(this.from, this.to, option);
    });
  }

  filterList(type: string): void {
    this.pokemonService.filterListByType(type);
  }

}