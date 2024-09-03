import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pokemon-search',
  standalone: true,
  imports: [FormsModule, CommonModule, PokemonCardComponent],
  templateUrl: './pokemon-search.component.html',  
  styleUrls: ['./pokemon-search.component.scss']  
})
export class PokemonSearchComponent {
  searchQuery: string = ''; 
  pokemon: any = null; 
  error: string = ''; 
  pokemonTypes: string = ''; 
  previousSearches: any[] = [];

  constructor(private http: HttpClient) {}

  searchPokemon() {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${this.searchQuery.toLowerCase()}`;
    this.http.get(apiUrl).pipe(
      catchError(err => {
        this.error = 'Pokémon não encontrado!';
        this.pokemon = null;
        this.pokemonTypes = '';
        return of(null);  
      })
    ).subscribe({
      next: (data: any) => {
        if (data) {
          this.pokemon = data;
          this.pokemonTypes = this.getPokemonTypes(data);
          this.previousSearches.push({ ...data, typesString: this.getPokemonTypes(data) });
          this.error = '';
        }
      }
    });
  }

  getPokemonTypes(pokemon: any): string {
    return pokemon.types.map((t: any) => t.type.name).join(', ');
  }
}
