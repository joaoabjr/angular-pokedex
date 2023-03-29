import { Type } from 'src/app/model/Type';

export interface Pokemon {
	number: number;
	name: string;
	image: string;
	types: Type[];
}
