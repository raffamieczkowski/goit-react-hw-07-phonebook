import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from './store/contactsSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
