import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailModalComponent } from '../pokemon-detail-modal/pokemon-detail-modal.component'; 

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule, PokemonDetailModalComponent], 
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() pokemon: any; 
  @Input() pokemonTypes: string = ''; 

  isOpen: boolean = false; 
  showModal: boolean = false; 

  toggleCard() {
    this.isOpen = !this.isOpen;
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
