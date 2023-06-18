import { fetchNowPlaying } from '@/api';
import MovieList from '@/components/MovieList';
import { useQuery } from '@tanstack/react-query';

const NowPlaying = () => {
  const {
    status,
    data: movies,
    error,
    isFetching,
  } = useQuery<IAPIResponse, Error, IMovie[]>({
    queryKey: ['playing'],
    queryFn: fetchNowPlaying,
    select: (playing) => playing.results,
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

export default NowPlaying;
