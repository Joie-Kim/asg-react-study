import { countryState } from '@/Recoil/country/atoms';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

// #region styled
const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  padding: 0 20px;
  width: 100%;
  height: 50px;
  background-color: #dfe6e9;
  border: 1px solid #dfe6e9;
  border-radius: 10px;
`;

const ErrorMsg = styled.p`
  margin: 16px 20px;
  color: tomato;
`;

const SubmitBtn = styled.button`
  margin-bottom: 16px;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.accentColor};
  border: 1px solid ${(props) => props.theme.accentColor};
  border-radius: 10px;
  color: inherit;
  font-size: 20px;
  font-weight: bold;
`;
// #endregion

interface IForm {
  country: string;
}

const CountryForm = () => {
  const [countries, setCountries] = useRecoilState(countryState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
  } = useForm<IForm>();

  /** 입력 값 유효성 검사
   * @param data 입력 값
   *
   * 이미 등록한 나라인지 확인
   * 1) 이미 등록한 경우 : error 메시지 노출
   * 2) 등록하지 않은 경우 : 나라 리스트에 추가
   */
  const onValid = (data: IForm) => {
    if (countries.map((country) => country.name).includes(data.country)) {
      setError('country', {
        message: '⚠️ 이미 등록한 나라입니다.',
      });
    } else {
      const countryId = `country-${uuidv4()}`;
      setCountries((prev) => [
        { id: countryId, name: data.country, category: 'Wish' },
        ...prev,
      ]);
      setValue('country', '');
    }
  };

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <Input
        {...register('country', { required: '⚠️ 나라 이름을 입력해주세요.' })}
        placeholder='가고 싶은 나라 이름을 입력하세요.'
      />
      <ErrorMsg>{errors.country?.message}</ErrorMsg>
      <SubmitBtn>추가하기 🚀</SubmitBtn>
    </Form>
  );
};

export default CountryForm;
