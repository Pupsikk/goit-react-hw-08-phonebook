import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from 'components/Navigation';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <div className={css.container}>
        <header className={css.header}>
          <Navigation />
        </header>
      </div>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
