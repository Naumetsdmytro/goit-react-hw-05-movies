import { Loader } from 'components/Loader';
import { fetchReviews } from 'components/services/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList } from './ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const fetchUsersReviews = async () => {
      setLoading(true);
      try {
        const data = await fetchReviews(movieId, abortController);
        setReviews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsersReviews();

    return () => {
      abortController.abort();
    };
  }, [movieId]);
  return (
    <>
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
      {loading && <Loader />}
      {error && <h3>{error}</h3>}
    </>
  );
};

export default Reviews;
