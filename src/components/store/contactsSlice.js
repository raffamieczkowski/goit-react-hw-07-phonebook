import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '', status: 'idle', error: null },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
      });
  },
});

export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
