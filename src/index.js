import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { fetchContacts } from './components/redux/store';
import store from './components/redux/store';

import App from './components/App';
import './index.css';

store.dispatch(fetchContacts());

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
