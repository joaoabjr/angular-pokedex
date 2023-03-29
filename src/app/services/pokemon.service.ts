import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Pokemon } from '../model/Pokemon';

@Injectable({ providedIn: 'root' })
export class PokemonService {
	allPokemonsUrl: string = 'https://pokeapi.co/api/v2/pokemon';

	public pokemons = new ReplaySubject<Pokemon[]>();

	constructor(private httpClient: HttpClient) {
		this.httpClient.get(this.allPokemonsUrl).subscribe((pokemon) => {
			console.log(pokemon);
		});
	}
}
