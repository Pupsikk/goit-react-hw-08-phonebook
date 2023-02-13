import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from '../ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selector';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onAddNewContact = evt => {
    evt.preventDefault();
    contacts.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts.`)
      : dispatch(
          addContact({
            name,
            number,
            id: nanoid(),
          })
        );
    setName('');
    setNumber('');
  };

  const NameInputId = nanoid();
  const NumberInputId = nanoid();

  const handleChangeNumber = evt => {
    setNumber(evt.currentTarget.value);
  };
  const handleChangeName = evt => {
    setName(evt.currentTarget.value);
  };

  return (
    <form className={css.form} onSubmit={onAddNewContact}>
      <label className={css.formLabel} htmlFor={NameInputId}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Contact name"
          onChange={handleChangeName}
          value={name}
          id={NameInputId}
          className={css.formName}
        />
      </label>
      <label className={css.formLabel} htmlFor={NumberInputId}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Contact tel. number"
          onChange={handleChangeNumber}
          value={number}
          id={NumberInputId}
          className={css.formNumber}
        />
      </label>
      <button className={css.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
}
