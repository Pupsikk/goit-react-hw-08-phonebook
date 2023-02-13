import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import css from './UserMenu/UserMenu.module.css';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu/UserMenu';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <NavLink className={css.nav_link} to="/">
        Phonebook
      </NavLink>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};
