import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Notiflix from 'notiflix';

import { HomeList } from 'components/List';
import { Loader } from 'components/Loader';
import { fetchPopularFilms } from '../services/API';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const popularFilms = await fetchPopularFilms();
        if (popularFilms.length === 0) {
          Notiflix.Notify.failure(
            'Sorry something went wrong, try again later!'
          );
        }
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
    <main>
      <h2>Trending today</h2>
      {movies.length > 0 && <HomeList films={movies} location={location} />}
      {loading && <Loader />}
      {error && <h3>{error}</h3>}
    </main>
  );
};

export default Home;
