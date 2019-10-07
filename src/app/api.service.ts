import { Injectable } from '@angular/core';
import {map, catchError} from 'rxjs/operators';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: Http
  ) { }

  /**
   * Return all pokemons 
   */
  getPokemons(pagination){
    if (pagination !== 0 ){
      return this.http
      .get(pagination)
      .pipe(
          map(response => {          
              const info = response.json();
              console.log(info.results);
              return info;
          })
      );
    }
    return this.http
    .get('https://pokeapi.co/api/v2/pokemon/')
    .pipe(
        map(response => {          
            const info = response.json();
            console.log(info.results);
            return info;
        })
    );
  }

  /**
   * Return pokemons of id
   */
  getPokemonsId(url){
    return this.http
    .get(url)
    .pipe(
        map(response => {          
            const info = response.json();
            return info;
        })
    );
  }

  /**
   * Return pokemons details
   */
  getdetailsPokemon(api) {
    return this.http
      .get(api)
      .pipe(
          map(response => {          
              const info = response.json();
              console.log(info);
              return info;
          })
      );
  }

  
}
