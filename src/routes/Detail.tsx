import { ICharacter, fetchCharacterInfo } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { handleImgError } from '@/util';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 5% 20px;
  max-width: 480px;
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  margin-bottom: 10px;
`;

const Name = styled.h2`
  margin: 8px 0;
  font-size: 32px;
  color: ${(props) => props.theme.accentColor};
`;

const FilmList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const FilmItem = styled.li`
  width: fit-content;
  margin: 4px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Footer = styled.footer`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
    border: 1px solid ${(props) => props.theme.accentColor};
    border-radius: 25px;
    background-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.textColor};
    text-align: center;
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const { isLoading, data } = useQuery<ICharacter>({
    queryKey: ['character', id],
    queryFn: () => fetchCharacterInfo(Number(id)),
  });

  return (
    <Container>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Img src={data?.imageUrl ?? ''} onError={handleImgError} />
          <Name>
            {state?.name ? state.name : isLoading ? 'Loading...' : data?.name}
          </Name>
          <FilmList>
            {data?.films.map((v, i) => (
              <FilmItem key={i}>
                <span>{v}</span>
              </FilmItem>
            ))}
          </FilmList>
        </>
      )}
      <Footer>
        <Link to='/' preventScrollReset={true}>
          Go to List
        </Link>
      </Footer>
    </Container>
  );
};

export default Detail;
