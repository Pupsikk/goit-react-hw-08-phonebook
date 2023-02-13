import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './Register.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  function onFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    form.reset();
  }

  return (
    <main>
      {/* <section className={css.section}> */}
      <div className={css.registration}>
        <h2 className={css.registration__title}>Registration</h2>
        <form className={css.registration__form} onSubmit={onFormSubmit}>
          <label className={css.registration__label}>
            Username
            <input
              className={css.registration__input}
              type="text"
              name="name"
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
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
            Register{' '}
          </button>
        </form>
      </div>
      {/* </section> */}
    </main>
  );
};

export default RegisterForm;
