import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './root-reducer';
import thunk from 'redux-thunk';
import promiseMiddleware from '../api/promiseMiddleware'

function getComposeEnhancers() {
  if (
    process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // Eslint-disable-line
  ) {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // Eslint-disable-line
  }
  return compose;
}

export default () => {
  const composeEnhancers = getComposeEnhancers();

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, promiseMiddleware)),
  )

  if (process.env.NODE_ENV === 'development') {
    window.store = store;
  }

  return store
}