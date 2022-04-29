import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  @Input() favPokemons : any [] = [];
  constructor() { }

  ngOnInit(): void {

  }

  deleteFavComic() {
    localStorage.setItem('data', JSON.stringify(this.favPokemons))
    localStorage.removeItem('data')
    this.favPokemons = JSON.parse(localStorage.getItem('data')!);
  }

}