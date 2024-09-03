import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PokemonCardComponent } from './pokemon-card.component';
import { PokemonDetailModalComponent } from '../pokemon-detail-modal/pokemon-detail-modal.component';
import { CommonModule } from '@angular/common';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, PokemonCardComponent, PokemonDetailModalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;

   
    component.pokemon = {
      name: 'pikachu',
      sprites: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
      }
    };
    component.pokemonTypes = 'electric';

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle card visibility', () => {
    component.toggleCard();
    fixture.detectChanges();

    expect(component.isOpen).toBeTrue();

    component.toggleCard();
    fixture.detectChanges();

    expect(component.isOpen).toBeFalse();
  });

  it('should open and close the modal', () => {
    component.openModal();
    fixture.detectChanges();

    expect(component.showModal).toBeTrue();

    component.closeModal();
    fixture.detectChanges();

    expect(component.showModal).toBeFalse();
  });
});
