import { Characters, fetchCharacters } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DEFAULT_IMG from '@/assets/default_profile.png';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

const ChararcterList = styled.ul``;

const Character = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const Home = () => {
  const { isLoading, data } = useQuery<Characters>({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
  });

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = DEFAULT_IMG;
  };

  return (
    <Container>
      <Header>
        <Title>Characters</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <ChararcterList>
          {data?.slice(0, 100).map((char) => (
            <Character key={char.id}>
              <Link to={`character/${char.id}`} state={{ name: char.name }}>
                <Img src={char.imageUrl ?? ''} onError={handleImgError} />
                {char.name} &rarr;
              </Link>
            </Character>
          ))}
        </ChararcterList>
      )}
    </Container>
  );
};

export default Home;
