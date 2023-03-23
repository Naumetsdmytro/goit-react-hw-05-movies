import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCast } from 'components/services/API';
import { Loader } from 'components/Loader';
import { CastList } from './CastList';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const fetchCredits = async () => {
      setLoading(true);
      try {
        const credits = await fetchCast(movieId, abortController);
        setCast(credits);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCredits();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <div>
      {cast.length > 0 && !loading && <CastList cast={cast} />}
      {loading && <Loader />}
      {error && <h3>{error}</h3>}
    </div>
  );
};

export default Cast;
