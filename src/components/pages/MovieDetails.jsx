import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchMoviedetails } from 'components/services/API';
import { MovieCard } from 'components/MovieCard';
import { Loader } from 'components/Loader';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const movieData = await fetchMoviedetails(movieId);
        setMovie(movieData);
        console.log(movieData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <main>
      <MovieCard movie={movie} />
      {loading && <Loader />}
      {error && <h3>{error}</h3>}
    </main>
  );
};

export default MovieDetails;
