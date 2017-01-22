import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import casinoReducer from './app/reducers/';
import casinoSaga from './app/sagas/sagas';
import Tables from './app/containers/Tables.container';
import './index.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  casinoReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(casinoSaga);

ReactDOM.render(
  <Provider store={store}>
    <Tables/>
  </Provider>,
  document.getElementById('root')
);
