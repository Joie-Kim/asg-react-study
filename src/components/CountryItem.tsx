import { ICountry, countriesState } from '@/atoms';
import { useSetRecoilState } from 'recoil';

const CountryItem = ({ id, name, category }: ICountry) => {
  const setCountries = useSetRecoilState(countriesState);

  const onClick = (newCategory: ICountry['category']) => {
    setCountries((prev) =>
      prev.map((country) =>
        country.id === id ? { ...country, category: newCategory } : country
      )
    );
  };

  return (
    <li>
      <span>{name}</span>
      {category !== 'Wish' && (
        <button onClick={() => onClick('Wish')}>Wish</button>
      )}
      {category !== 'Visited' && (
        <button onClick={() => onClick('Visited')}>Visited</button>
      )}
      {category !== 'Like' && (
        <button onClick={() => onClick('Like')}>Like</button>
      )}
    </li>
  );
};

export default CountryItem;
