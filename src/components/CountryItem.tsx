import { ICountry } from '@/types/country';
import ButtonBox from './ButtonBox';
import { useSetRecoilState } from 'recoil';
import { countryState } from '@/Recoil/country/atoms';

const CountryItem = ({ id, name, category }: ICountry) => {
  const setCountries = useSetRecoilState(countryState);

  /** 카테고리 변경 함수 */
  const onCategoryChange = (newCategory: ICountry['category']) => {
    setCountries((prev) =>
      prev.map((country) =>
        country.id === id ? { ...country, category: newCategory } : country
      )
    );
  };

  /** 항목 삭제 함수 */
  const onCountryDelete = () => {
    setCountries((prev) => prev.filter((country) => country.id !== id));
  };

  return (
    <li>
      <span>{name}</span>
      <ButtonBox
        category={category}
        onChange={onCategoryChange}
        onDelete={onCountryDelete}
      />
    </li>
  );
};

export default CountryItem;
