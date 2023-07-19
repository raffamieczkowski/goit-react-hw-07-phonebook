import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../components/store/contactsSlice';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';
import classNames from 'classnames';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) {
      alert('Name and number are required.');
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <div className={classNames(styles.container)}>
      <form onSubmit={handleSubmit}>
        <div className={classNames(styles.formGroup)}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={classNames(styles.formGroup)}>
          <label htmlFor="number">Number:</label>
          <input
            type="tel"
            id="number"
            placeholder="Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <button className={classNames(styles.button)} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
