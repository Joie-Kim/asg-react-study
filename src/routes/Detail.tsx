import { ICharacter, fetchCharacterInfo } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';
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

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const { isLoading, data } = useQuery<ICharacter>({
    queryKey: ['character', id],
    queryFn: () => fetchCharacterInfo(Number(id)),
  });

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = DEFAULT_IMG;
  };

  return (
    <Container>
      <Header>
        <Title>
          {state?.name ? state.name : isLoading ? 'Loading...' : data?.name}
        </Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Img src={data?.imageUrl ?? ''} onError={handleImgError} />
          <Overview>
            {data?.films.map((v, i) => (
              <OverviewItem key={i}>
                <span>{v}</span>
              </OverviewItem>
            ))}
          </Overview>
        </>
      )}
    </Container>
  );
};

export default Detail;
