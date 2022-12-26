* redux-logger is installed as a dependancy and logger is imported at the index level
* You need to import the applyMiddleware function, and pass in logger
* See example below:

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducer from './reducers/reducer.index';
import logger from 'redux-logger';

const store = createStore(reducer, applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);