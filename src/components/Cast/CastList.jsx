import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import plug from '../../images/plug.jpg';
import styles from './Cast.module.css';

export const CastList = ({ cast }) => {
  const changedCast = cast.map(({ name, profile_path, character }) => ({
    name,
    img: profile_path,
    character,
  }));
  return (
    <ul>
      {changedCast.map(({ name, img, character }) => (
        <li key={nanoid()} className={styles.castListItem}>
          {img ? (
            <img
              src={`https://image.tmdb.org/t/p/w500` + img}
              width={115}
              height={133}
              alt={name}
              className={styles.castImg}
            />
          ) : (
            <img
              src={plug}
              width={110}
              height={133}
              alt="plug"
              className={styles.castImg}
            />
          )}
          <div>
            <h4 className={styles.titleCast}>{name}</h4>
            <p>Character: {character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
      character: PropTypes.string.isRequired,
    })
  ).isRequired,
};
