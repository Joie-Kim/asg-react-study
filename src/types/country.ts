export const CategoryTypes = ['Wish', 'Visited', 'Prefer'] as const;

export interface ICountry {
  id: string;
  name: string;
  category: (typeof CategoryTypes)[number];
}
