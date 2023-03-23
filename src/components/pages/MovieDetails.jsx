import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchMoviedetails } from 'components/services/API';
import { MovieCard } from 'components/MovieCard';
import { Loader } from 'components/Loader';
import { Container } from 'components/Container';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const movieData = await fetchMoviedetails(movieId, abortController);
        setMovie(movieData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <Container>
      {movie && <MovieCard movie={movie} />}
      {loading && <Loader />}
      {error && <h3>{error}</h3>}
    </Container>
  );
};

export default MovieDetails;
