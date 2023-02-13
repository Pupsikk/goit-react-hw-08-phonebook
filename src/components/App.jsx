// import { useEffect } from 'react';
// import ContactForm from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';

// import { useDispatch, useSelector } from 'react-redux';
// import { getError, getIsLoading } from 'redux/contacts/selector';
// import { fetchContacts } from 'redux/contacts/operations';

// export function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(getIsLoading);
//   const error = useSelector(getError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         flexDirection: 'column',
//         alignItems: 'center',
//         fontSize: 24,
//         color: '#010101',
//         textShadow: 'rgb(232, 216, 137) 1px 0 10px',
//         backgroundColor: 'rgba(0, 0, 255, 0.032)',
//       }}
//     >
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       {isLoading && !error && <b>Request in progress...</b>}
//       <ContactList />
//     </div>
//   );
// }

import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Layout } from 'pages/Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Loader } from './Loader';

const HomePage = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/Register/Register'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
