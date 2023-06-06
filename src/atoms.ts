import { atom } from 'recoil';

export interface ICountry {
  id: string;
  name: string;
  category: 'Wish' | 'Visited' | 'Like';
}

export const countriesState = atom<ICountry[]>({
  key: 'countries',
  default: [],
});
