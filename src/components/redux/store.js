import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import contactsReducer from '../store/contactsSlice';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await axios.get('https://64b7a51421b9aa6eb078b52a.mockapi.io/contacts/contacts');
  return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  const response = await axios.post('https://64b7a51421b9aa6eb078b52a.mockapi.io/contacts/contacts', contact);
  return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  await axios.delete(`https://64b7a51421b9aa6eb078b52a.mockapi.io/contacts/contacts/${contactId}`);
  return contactId;
});

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
