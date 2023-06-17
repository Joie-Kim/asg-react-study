import { fetchPopular } from '@/api';
import MovieList from '@/components/MovieList';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  const {
    status,
    data: movies,
    error,
    isFetching,
  } = useQuery<IAPIResponse, Error, IMovie[]>({
    queryKey: ['popular'],
    queryFn: fetchPopular,
    select: (popular) => popular.results,
  });

  return status === 'loading' ? (
    <span>Loading...</span>
  ) : status === 'error' ? (
    <span>Error: {error.message}</span>
  ) : (
    <>
      {isFetching ? <div>Refreshing...</div> : null}

      <MovieList movies={movies} />
    </>
  );
};

export default Home;
