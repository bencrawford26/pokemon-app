import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ListDetailComponent } from './list-detail/list-detail.component'
import { TilesComponent } from './tiles/tiles.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListDetailComponent },
  { path: 'tiles', component: TilesComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
