import { useSearchParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';

import { MoviesList } from 'components/List';
import { fetchMovieByName } from 'components/services/API';
import { SearchForm } from 'components/SearchForm';
import { Loader } from 'components/Loader';

const Movies = () => {
  const [movies, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (filmName === '') {
      // Notiflix.Notify.failure('Please, enter the name, which you want!');
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      try {
        const films = await fetchMovieByName(filmName);
        if (films.length === 0) {
          Notiflix.Notify.info('Please, enter a valid name!');
          return;
        }
        setMovie(films);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [filmName]);

  const searchQuery = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const query =
      form.elements.name.value !== ''
        ? { query: form.elements.name.value }
        : {};
    setSearchParams(query);
    form.reset();
  };

  return (
    <main>
      <SearchForm searchQuery={searchQuery} filmName={filmName} />
      {loading && <Loader />}
      {error && <h3>{error}</h3>}
      {movies.length > 0 && !loading && (
        <MoviesList films={movies} location={location} />
      )}
    </main>
  );
};

export default Movies;
