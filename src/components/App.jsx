import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, fetchContacts } from './store/contactsSlice';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (newContact) => {
    if (!newContact.name || !newContact.number) {
      alert('Imię i numer telefonu są wymagane.');
      return;
    }
    dispatch(addContact(newContact));
  };

  return (
    <div>
      <h1 className={styles.heading}>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />

      <h2 className={styles.heading}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
