import css from './Home.module.css';

const Home = () => {
  return (
    <main>
      <div className={css.home}>
        <h1 className={css.home__title}>Phonebook</h1>
      </div>
    </main>
  );
};

export default Home;
