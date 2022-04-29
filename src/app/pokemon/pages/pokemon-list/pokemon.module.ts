import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonListComponent } from './pokemon-list.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ViewMoreComponent } from './components/view-more/view-more.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PokemonService } from '../../services/pokemon.service';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';






const routes: Routes = [
  { path: "", component: PokemonListComponent },
];

@NgModule({
  declarations: [
    PokemonListComponent,
    FilterPipe,
    ViewMoreComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    MatBottomSheetModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  providers: [PokemonService],
  entryComponents: [ViewMoreComponent],
})
export class PokemonModule { }
