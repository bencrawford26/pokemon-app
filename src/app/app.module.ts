import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSelectModule, MatButtonModule, MatDialogModule, MatInputModule, MatMenuModule, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import { AppRoutingModule } from './app-routing.module';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { TilesComponent } from './tiles/tiles.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonDetailComponent,
    ToolbarComponent,
    FilterDialogComponent,
    ListDetailComponent,
    FilterMenuComponent,
    TilesComponent,
    PokemonSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  entryComponents: [
    FilterDialogComponent,
    PokemonDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
