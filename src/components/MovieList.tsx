import styled from 'styled-components';
import MovieItem from './MovieItem';
import { useState } from 'react';
import Modal from './Modal';

// #region style
const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
// #endregion

// #region types
interface Props {
  movies: IMovie[];
}
// #endregion

const MovieList = ({ movies }: Props) => {
  const [selected, setSelected] = useState<null | number>(null);
  const closeModal = () => {
    setSelected(null);
  };

  return (
    <Container>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onClick={() => setSelected(movie.id)}
        />
      ))}
      {selected && (
        <Modal id={selected?.toString() ?? ''} initId={closeModal} />
      )}
    </Container>
  );
};

export default MovieList;
