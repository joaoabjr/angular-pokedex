import { Component } from '@angular/core';
import { Pokemon } from 'src/app/model/Pokemon';
import { Type } from 'src/app/model/Type';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
	selector: 'app-pokemon-list',
	templateUrl: './pokemon-list.component.html',
	styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
	constructor(public pokemonService: PokemonService) {}
}
