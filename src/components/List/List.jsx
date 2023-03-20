import { Link } from 'react-router-dom';

export const HomeList = ({ films, location }) => {
  return (
    <ul>
      {films.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              <p>{title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export const MoviesList = ({ films, location }) => {
  return (
    <ul>
      {films.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              <p>{title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
