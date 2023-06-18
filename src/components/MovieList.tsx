import styled from 'styled-components';
import MovieItem from './MovieItem';
import { useState } from 'react';
import Modal from './Modal';
import { motion } from 'framer-motion';

// #region style
const Container = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
// #endregion

// #region motion
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
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
    <Container variants={container} initial='hidden' animate='visible'>
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
