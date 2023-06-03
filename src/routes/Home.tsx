import { Characters, fetchCharacters } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { handleImgError } from '@/util';

const Container = styled.div`
  padding: 0px 20px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

const ChararcterList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Character = styled.li`
  margin: 10px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 15px;
  }
  &:hover {
    a {
      background-color: white;
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  resize: both;
  margin-bottom: 15px;
`;

const Home = () => {
  const { isLoading, data } = useQuery<Characters>({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
  });

  return (
    <Container>
      <Header>
        <Title>Welcome to Disney World!</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <ChararcterList>
          {data?.map((char) => (
            <Character key={char.id}>
              <Link to={`character/${char.id}`} state={{ name: char.name }}>
                <Img src={char.imageUrl ?? ''} onError={handleImgError} />
                {char.name}
              </Link>
            </Character>
          ))}
        </ChararcterList>
      )}
    </Container>
  );
};

export default Home;
