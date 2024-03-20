import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PokedexService } from '../services/pokedex.service';
import { HttpClientModule } from '@angular/common/http';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.page.html',
  styleUrls: ['./pokedex-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  providers: [PokedexService],
})
export class PokedexPagePage implements OnInit {

  pokemons: Pokemon[] = [];

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.pokedexService.getPokemons().subscribe({
      next: resp => {
        // console.log(resp.results);
        this.pokemons = resp.results;
      }
    });
  }

}
