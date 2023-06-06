import { atom } from 'recoil';
import { ICountry } from '../../types/country';

export const countryState = atom<ICountry[]>({
  key: 'countryState',
  default: [],
});
