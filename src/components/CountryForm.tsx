import { countryState } from '@/Recoil/country/atoms';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

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
   *
   * 이미 등록한 나라인지 확인
   * 1) 이미 등록한 경우 : error 메시지 노출
   * 2) 등록하지 않은 경우 : 나라 리스트에 추가
   */
  const onValid = (data: IForm) => {
    if (countries.map((country) => country.name).includes(data.country)) {
      setError('country', {
        message: '이미 등록한 나라입니다.',
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
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register('country', { required: '나라 이름을 입력해주세요.' })}
      />
      <span>{errors.country?.message}</span>
      <button>Let's Go!</button>
    </form>
  );
};

export default CountryForm;
