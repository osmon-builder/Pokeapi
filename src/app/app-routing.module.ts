import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/main-view", pathMatch: "full" },
  {
    path: "main-view",
    loadChildren: () => import('./pokemon/pages/pokemon-list/pokemon.module').then(m => m.PokemonModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
