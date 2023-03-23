import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import styles from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <NavLink to="/" className={styles.navLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={styles.navLink}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
