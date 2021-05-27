import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import App from './App';
import { CircularProgress } from '@material-ui/core';

let persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<CircularProgress />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
