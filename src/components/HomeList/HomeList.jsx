import { Link } from 'react-router-dom';

export const HomeList = ({ films }) => {
  console.log(films);
  return (
    <>
      {films.length > 0 && (
        <ul>
          {films.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`movies/${id}`}>
                  <p>{title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
