import React from 'react';
import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selector';
import { deleteContact } from 'redux/contacts/operations';

const Contact = ({ name, number, id, onDelContact }) => {
  return (
    <li className={css.item}>
      <span>
        {name}: {number}
      </span>
      <button
        className={css.contactButton}
        type="button"
        onClick={() => {
          onDelContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

const getVisibleContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  } else {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  const dispatch = useDispatch();
  const onDelContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {visibleContacts.map(contact => {
        return (
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
            onDelContact={onDelContact}
            key={contact.id}
          ></Contact>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
