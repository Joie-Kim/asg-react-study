import styled from 'styled-components';
import MovieItem from './MovieItem';

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

interface Props {
  movies: IMovie[];
}

const MovieList = ({ movies }: Props) => {
  return (
    <Container>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Container>
  );
};

export default MovieList;
