import { Link, useLocation, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import plug from '../../images/plug.jpg';

export const MovieCard = ({ movie }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const date = new Date(movie.release_date);

  const { img, genres, release, voteAverage } = {
    img: movie.poster_path,
    genres: movie.genres.map(({ name }) => name).join(' '),
    release: date.getUTCFullYear(movie.release_date),
    voteAverage: movie.vote_average.toFixed(1) * 10,
  };

  return (
    <main>
      <Link to={backLinkHref}>
        <button type="button">Go back</button>
      </Link>
      <h2>movie</h2>
      {img ? (
        <img
          src={`https://image.tmdb.org/t/p/w500` + img}
          alt={movie.title}
          width={280}
          height={360}
        />
      ) : (
        <img src={plug} width={280} height={360} alt="plug" />
      )}
      <h2>
        {movie.title} ({release})
      </h2>
      <p>User Score: {voteAverage}%</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>{genres}</p>
      <div>
        <h3>Aditional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: location.state?.from ?? '/' }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state?.from ?? '/' }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
