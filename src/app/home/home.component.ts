import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemon;
  containerPokemon: boolean;
  descriptionPokemon;
  abilities;
  forms;
  gameIndices;
  moves;
  species;
  sprites;
  stats;
  
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.listPokemons(0);
  }

  /**
   * Return all pokemons
   */
  listPokemons(paginations) {
    console.log(paginations);
    this.apiService.getPokemons(paginations).subscribe(response => {
      console.log(response);
      this.pokemon = response;
    });
  }

  listPokemonsID(url) {
    this.apiService.getPokemonsId(url).subscribe(response => {
      console.log(response);
      this.descriptionPokemon = response;
      this.abilities = this.descriptionPokemon.abilities;
      this.forms = this.descriptionPokemon.forms;
      this.gameIndices = this.descriptionPokemon.game_indices;
      this.moves = this.descriptionPokemon.moves;
      this.species = this.descriptionPokemon.species;
      this.stats = this.descriptionPokemon.stats;
      this.containerPokemon = true;
      console.log(this.abilities);
    });
  }
  back(){
    this.containerPokemon = false;
  }
}
