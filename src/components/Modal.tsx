import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { fetchMovie, makeBgPath } from '@/api';

// #region style
const Overlay = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const ModalContainer = styled(motion.div)`
  position: relative;
  width: 600px;
  height: 1000px !important;
  background-color: rgba(15, 15, 15, 1);
  border-radius: 40px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border: none;
  background: transparent;
  border-radius: 50%;
  color: ${(prop) => prop.theme.textColor};
  cursor: pointer;
  outline: none;
`;

const CoverImg = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 50%;
  object-fit: cover;
  background: linear-gradient(to bottom, transparent, rgb(15, 15, 15)),
    url(${(props) => props.imageUrl});
  background-size: cover;
`;

const Title = styled.h1`
  margin: 16px;
  font-size: 40px;
  font-weight: bold;
`;

const Contents = styled.p`
  margin: 16px;
  font-size: 24px;
  font-weight: 400;
`;
// #endregion

// #region motion
const overlay = {
  hidden: { backgroundColor: 'rgba(0, 0, 0, 0)' },
  visible: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
  exit: { backgroundColor: 'rgba(0, 0, 0, 0)' },
};
// #endregion

interface Props {
  id: string;
  initId: () => void;
}

const Modal = ({ id, initId }: Props) => {
  const {
    status,
    data: movie,
    error,
  } = useQuery<IMovieDetail, Error>({
    queryKey: ['movie', id],
    queryFn: () => fetchMovie(id),
  });

  return status === 'loading' ? (
    <span>Loading...</span>
  ) : status === 'error' ? (
    <span>Error: {error.message}</span>
  ) : (
    <AnimatePresence>
      {id ? (
        <Overlay
          variants={overlay}
          onClick={initId}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          <ModalContainer layoutId={id}>
            <CloseBtn onClick={initId}>
              <svg
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z'
                ></path>
              </svg>
            </CloseBtn>
            <CoverImg imageUrl={makeBgPath(movie.backdrop_path)} />
            <Title>{movie.title}</Title>
            <Contents>{movie.overview}</Contents>
            <Contents>
              <ul>
                <li>Budget: {movie.budget}</li>
                <li>Revenue: {movie.revenue}</li>
                <li>Runtimes: {movie.runtime}</li>
                <li>Rating: {movie.vote_average.toFixed(2)}</li>
                <li>
                  Homepage: <a href={movie.homepage}>{movie.homepage}</a>
                </li>
              </ul>
            </Contents>
          </ModalContainer>
        </Overlay>
      ) : null}
    </AnimatePresence>
  );
};

export default Modal;
