import { makeImagePath } from '@/api';
import styled from 'styled-components';

const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-height: 300px;
`;

const Poster = styled.img`
  width: 200px;
  height: 85%;
  border-radius: 20px;
`;

const Title = styled.h2`
  margin-top: 5%;
  height: 10%;
  text-align: center;
  /* border: 1px solid #fff; */
`;

interface Props {
  movie: IMovie;
}

const MovieItem = ({ movie }: Props) => {
  return (
    <Container>
      <Poster src={makeImagePath(movie.poster_path)} />
      <Title>{movie.title}</Title>
    </Container>
  );
};

export default MovieItem;
