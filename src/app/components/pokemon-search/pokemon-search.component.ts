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

  constructor(private http: HttpClient) {}

  searchPokemon() {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${this.searchQuery.toLowerCase()}`;
    this.http.get(apiUrl).pipe(
      catchError(err => {
        this.error = 'Pokémon não encontrado!';
        this.pokemon = null;
        this.pokemonTypes = '';
        return of(null);  // Retorna um observable nulo para continuar o fluxo
      })
    ).subscribe({
      next: (data: any) => {
        if (data) {
          console.log('Pokemon Data:', data); 
          this.pokemon = data;
          this.pokemonTypes = data.types.map((t: any) => t.type.name).join(', ');
          this.error = '';
        }
      },
      complete: () => {
        console.log('Requisição completa'); 
      }
    });
  }
}
