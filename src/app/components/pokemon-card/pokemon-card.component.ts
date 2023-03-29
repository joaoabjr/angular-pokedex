import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/model/Pokemon';

@Component({
	selector: 'app-pokemon-card',
	templateUrl: './pokemon-card.component.html',
	styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
	@Input()
	public pokemon!: Pokemon;
}
