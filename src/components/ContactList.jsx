import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from './store/contactsSlice';
import styles from './ContactList.module.css'; // Import klasy ze stylami

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={styles.listContainer}>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={styles.contactItem}> {/* Dodanie klasy do <li> */}
            <span className={styles.contactName}>{contact.name}: {contact.number}</span> {/* Dodanie klasy do <span> */}
            <button className={styles.deleteButton} onClick={() => handleDeleteContact(contact.id)}>Delete</button> {/* Dodanie klasy do buttona */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
