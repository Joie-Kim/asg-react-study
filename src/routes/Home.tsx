import { countriesState } from '@/atoms';
import CountryForm from '@/components/CountryForm';
import CountryItem from '@/components/CountryItem';
import { useRecoilValue } from 'recoil';

const Home = () => {
  const countries = useRecoilValue(countriesState);
  return (
    <div>
      <CountryForm />
      <hr />
      <h1>가보고 싶은 나라들</h1>
      {countries.map((country) => (
        <CountryItem key={country.id} {...country} />
      ))}
    </div>
  );
};

export default Home;
