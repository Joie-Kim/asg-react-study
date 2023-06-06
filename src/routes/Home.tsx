import { countrySelector } from '@/Recoil/country/selectors';
import CountryForm from '@/components/CountryForm';
import CountryItem from '@/components/CountryItem';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// #region styled
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 0px 20px;
  max-width: 480px;
  height: 100vh;
`;

const ListSection = styled.section`
  margin: 16px 0;
`;

const Title = styled.h1`
  margin: 20px 0;
  font-size: 36px;
  font-weight: bold;
`;

const List = styled.ul`
  width: 100%;
  list-style: none;
`;
// #endregion

const Home = () => {
  const [wishList, visitedList, preferList] = useRecoilValue(countrySelector);

  // TODO: 반복되는 부분을 어떻게 해결할 수 있을까...? 🤔
  return (
    <Container>
      <ListSection>
        <Title>가고 싶은 나라들</Title>
        <CountryForm />
        <List>
          {wishList.map((country) => (
            <CountryItem key={country.id} {...country} />
          ))}
        </List>
      </ListSection>

      <ListSection>
        <Title>가본 나라들</Title>
        <List>
          {visitedList.map((country) => (
            <CountryItem key={country.id} {...country} />
          ))}
        </List>
      </ListSection>

      <ListSection>
        <Title>좋아하는 나라들</Title>
        <List>
          {preferList.map((country) => (
            <CountryItem key={country.id} {...country} />
          ))}
        </List>
      </ListSection>
    </Container>
  );
};

export default Home;
