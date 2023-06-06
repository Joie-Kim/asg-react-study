import { selector } from 'recoil';
import { countryState } from './atoms';
import { CategoryTypes } from '@/types/country';

export const countrySelector = selector({
  key: 'countrySelector',
  get: ({ get }) => {
    const countries = get(countryState);
    return CategoryTypes.map((category) =>
      countries.filter((country) => country.category === category)
    );
  },
});
