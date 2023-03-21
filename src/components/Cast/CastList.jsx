import { nanoid } from 'nanoid';

import plug from '../../images/plug.jpg';

export const CastList = ({ cast }) => {
  const changedCast = cast.map(({ name, profile_path, character, id }) => ({
    name,
    img: profile_path,
    character,
    id,
  }));
  return (
    <ul>
      {changedCast.map(({ name, img, character }) => (
        <li key={nanoid()}>
          {img ? (
            <img
              src={`https://image.tmdb.org/t/p/w500` + img}
              width={115}
              height={133}
              alt={name}
            />
          ) : (
            <img src={plug} width={110} height={133} alt="plug" />
          )}
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};
