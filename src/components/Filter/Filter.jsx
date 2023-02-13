import css from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/Filter.slice';
import { getFilter } from 'redux/contacts/selector';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onQueryChanged = query => {
    dispatch(setFilter(query));
  };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Search contact"
        value={filter}
        onChange={evt => onQueryChanged(evt.target.value)}
      ></input>
    </label>
  );
}
