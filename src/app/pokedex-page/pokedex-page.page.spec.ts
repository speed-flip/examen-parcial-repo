import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokedexPagePage } from './pokedex-page.page';

describe('PokedexPagePage', () => {
  let component: PokedexPagePage;
  let fixture: ComponentFixture<PokedexPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PokedexPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
