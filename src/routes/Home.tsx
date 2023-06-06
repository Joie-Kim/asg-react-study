import { countrySelector } from '@/Recoil/country/selectors';
import CountryForm from '@/components/CountryForm';
import CountryItem from '@/components/CountryItem';
import { useRecoilValue } from 'recoil';

const Home = () => {
  const [wishList, visitedList, preferList] = useRecoilValue(countrySelector);

  return (
    <div>
      <CountryForm />
      <hr />
      <h1>가고 싶은 나라들</h1>
      {wishList.map((country) => (
        <CountryItem key={country.id} {...country} />
      ))}
      <hr />
      <h1>가본 나라들</h1>
      {visitedList.map((country) => (
        <CountryItem key={country.id} {...country} />
      ))}
      <hr />
      <h1>좋아하는 나라들</h1>
      {preferList.map((country) => (
        <CountryItem key={country.id} {...country} />
      ))}
    </div>
  );
};

export default Home;
