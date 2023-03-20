import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import { fetchMovieByName } from 'components/services/API';
import { SearchForm } from 'components/SearchForm';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filmName = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await fetchMovieByName(filmName);
      console.log(data);
    };
    fetchMovie();
  }, [filmName]);

  const searchQuery = evt => {
    const query =
      evt.elements.name.value !== '' ? { query: evt.elements.name.value } : {};
    console.log(query);
    setSearchParams(query);
  };

  return (
    <main>
      <SearchForm searchQuery={searchQuery} filmName={filmName} />
    </main>
  );
};

export default Movies;
