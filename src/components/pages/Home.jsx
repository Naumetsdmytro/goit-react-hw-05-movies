import { useState, useEffect } from 'react';

import { HomeList } from 'components/HomeList';
import { Loader } from 'components/Loader';
import { fetchPopularFilms } from '../services/API';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const popularFilms = await fetchPopularFilms();
        setMovies(popularFilms);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      {movies.length > 0 && <HomeList films={movies} />}
      {loading && <Loader />}
      {error && <h3>{error}</h3>}
    </>
  );
};

export default Home;
