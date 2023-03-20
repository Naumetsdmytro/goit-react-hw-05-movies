import { Link, useLocation } from 'react-router-dom';

export const MovieCard = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  return (
    <div>
      <Link to={backLinkHref}>
        <button type="button">Go back</button>
      </Link>
      <h2>nothing yet</h2>
    </div>
  );
};
