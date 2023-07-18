import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from './store/contactsSlice';
import { fetchContacts } from './redux/store';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);
  const status = useSelector((state) => state.contacts.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (newContact) => {
    if (!newContact.name || !newContact.number) {
      alert('Name and number are required.');
      return;
    }
    dispatch(handleAddContact(newContact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(handleAddContact(contactId));
  };

  const handleFilterChange = (value) => {
    dispatch(setFilter(value));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error occurred while loading contacts.</div>;
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={handleFilterChange} />
      <ContactList contacts={contacts} filter={filter} deleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
