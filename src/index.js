import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import casinoReducer from './app/reducers/';
import Tables from './app/components/Tables.component';
import './index.scss';

const store = createStore(casinoReducer);

ReactDOM.render(
  <Provider store={store}>
    <Tables/>
  </Provider>,
  document.getElementById('root')
);
