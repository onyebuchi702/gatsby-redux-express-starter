import React from 'react';
import { Provider } from 'react-redux';
// import { createStore as reduxCreateStore } from 'redux';
import store from './store';

// const createStore = () => reduxCreateStore(rootReducer);

export default ({ element }) => (
  <Provider store={store}>{element}</Provider>
);
