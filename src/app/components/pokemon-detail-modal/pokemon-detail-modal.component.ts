import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail-modal.component.html',
  styleUrls: ['./pokemon-detail-modal.component.scss']
})
export class PokemonDetailModalComponent implements OnChanges {
  @Input() pokemon: any; 
  @Output() close = new EventEmitter<void>(); 

  pokemonAbilities: string = ''; 

  ngOnChanges() {
    if (this.pokemon) {
      this.pokemonAbilities = this.pokemon.abilities
        .map((a: any) => a.ability.name)
        .join(', ');
    }
  }

  closeModal() {
    this.close.emit(); 
  }
}
