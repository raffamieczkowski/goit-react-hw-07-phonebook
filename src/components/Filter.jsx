import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../components/store/contactsSlice';

const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={filter}
      onChange={handleFilterChange}
    />
  );
};

export default Filter;
