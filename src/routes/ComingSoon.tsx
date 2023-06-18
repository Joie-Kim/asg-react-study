import { fetchComingSoon } from '@/api';
import MovieList from '@/components/MovieList';
import { useQuery } from '@tanstack/react-query';

const ComingSoon = () => {
  const {
    status,
    data: movies,
    error,
    isFetching,
  } = useQuery<IAPIResponse, Error, IMovie[]>({
    queryKey: ['coming'],
    queryFn: fetchComingSoon,
    select: (coming) => coming.results,
  });

  return status === 'loading' ? (
    <span>Loading...</span>
  ) : status === 'error' ? (
    <span>Error: {error?.message}</span>
  ) : (
    <>
      {isFetching ? <div>Refreshing...</div> : null}

      <MovieList movies={movies ?? []} />
    </>
  );
};

export default ComingSoon;
