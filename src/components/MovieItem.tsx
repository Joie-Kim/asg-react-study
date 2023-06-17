import { makeImagePath } from '@/api';
import styled from 'styled-components';

const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  border: 1px solid;
`;

const Poster = styled.img`
  width: 200px;
  height: 90%;
  border-radius: 20px;
  /* background-color: tomato; */
`;

const Title = styled.h2``;

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
