import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from '../Register/Register.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  function onFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      logIn({
        email,
        password,
      })
    );
    form.reset();
  }

  return (
    <main>
      <div className={css.registration}>
        <h2 className={css.registration__title}>Log in</h2>
        <form className={css.registration__form} onSubmit={onFormSubmit}>
          <label className={css.registration__label}>
            Email
            <input
              className={css.registration__input}
              type="email"
              name="email"
              placeholder="Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="example: characters@characters.domain"
              required
            />
          </label>
          <label className={css.registration__label}>
            Password
            <input
              className={css.registration__input}
              type="password"
              name="password"
              placeholder="Password"
              pattern="\w{4,8}"
              title="Password requires 4-8 characters"
              required
            />
          </label>
          <button className={css.registration__button} type="submit">
            Log in{' '}
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginForm;
