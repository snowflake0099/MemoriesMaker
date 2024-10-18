import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; // Use configureStore
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';

// Replace createStore with configureStore
const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});

// Create a root using createRoot and pass the container element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap App component in the Provider and pass the store
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
