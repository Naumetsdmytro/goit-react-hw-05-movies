import PropTypes, { object } from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './Lists.module.css';

export const HomeList = ({ films, location }) => {
  return (
    <ul>
      {films.map(({ id, title }) => {
        return (
          <li key={id} className={styles.listItem}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              <p>{title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

HomeList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  location: object,
};

export const MoviesList = ({ films, location }) => {
  return (
    <ul>
      {films.map(({ id, title }) => {
        return (
          <li key={id} className={styles.listItem}>
            <Link to={`${id}`} state={{ from: location }}>
              <p>{title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  location: object,
};
