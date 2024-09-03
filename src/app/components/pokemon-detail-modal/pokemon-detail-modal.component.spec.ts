import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDetailModalComponent } from './pokemon-detail-modal.component';

describe('PokemonDetailModalComponent', () => {
  let component: PokemonDetailModalComponent;
  let fixture: ComponentFixture<PokemonDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetailModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display pokemon details when input is provided', () => {
    const pokemonData = {
      name: 'pikachu',
      abilities: [{ ability: { name: 'static' } }],
      sprites: { front_default: 'pikachu.png' },
    };

    component.pokemon = pokemonData;
    component.ngOnChanges();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.pokemon-name')?.textContent).toContain('pikachu');
    expect(compiled.querySelector('.pokemon-abilities')?.textContent).toContain('static');
    expect(compiled.querySelector('img')?.src).toContain('pikachu.png');
  });

  it('should handle missing pokemon input', () => {
    component.pokemon = null;
    component.ngOnChanges();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.pokemon-name')).toBeNull();
    expect(compiled.querySelector('.pokemon-abilities')).toBeNull();
    expect(compiled.querySelector('img')).toBeNull();
  });
});
