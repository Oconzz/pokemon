import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { PokemonSearchComponent } from './pokemon-search.component';

describe('PokemonSearchComponent', () => {
  let component: PokemonSearchComponent;
  let fixture: ComponentFixture<PokemonSearchComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, PokemonSearchComponent],
      providers: [provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonSearchComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should search for a pokemon', () => {
    component.searchQuery = 'pikachu';
    component.searchPokemon();

    const req = httpTestingController.expectOne('https://pokeapi.co/api/v2/pokemon/pikachu');
    expect(req.request.method).toEqual('GET');

    req.flush({
      name: 'pikachu',
      types: [{ type: { name: 'electric' } }],
    });

    fixture.detectChanges();
    expect(component.pokemon.name).toEqual('pikachu');
    expect(component.pokemonTypes).toEqual('electric');
  });

  it('should handle search errors', () => {
    component.searchQuery = 'invalid-pokemon';
    component.searchPokemon();

    const req = httpTestingController.expectOne('https://pokeapi.co/api/v2/pokemon/invalid-pokemon');
    req.flush('Not Found', { status: 404, statusText: 'Not Found' });

    fixture.detectChanges();
    expect(component.pokemon).toBeNull();
    expect(component.error).toBe('Pokémon não encontrado!');
  });
});
