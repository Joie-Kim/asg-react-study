import { ICountry } from '@/types/country';
import ButtonBox from './ButtonBox';
import { useSetRecoilState } from 'recoil';
import { countryState } from '@/Recoil/country/atoms';
import styled from 'styled-components';

const Item = styled.li`
  margin-bottom: 10px;
  padding: 0 20px;
  span {
    font-size: 24px;
    font-weight: bold;
  }
`;

const CountryItem = ({ id, name, category }: ICountry) => {
  const setCountries = useSetRecoilState(countryState);

  /** 카테고리 변경 함수
   * @param newCategory 클릭한 버튼에 지정된 카테고리
   */
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
    <Item>
      <span>{name}</span>
      <ButtonBox
        category={category}
        onChange={onCategoryChange}
        onDelete={onCountryDelete}
      />
    </Item>
  );
};

export default CountryItem;
