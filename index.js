/** @format */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppRouter from './src/router/AppRouter';
import { Provider } from 'react-redux';
import { compose, createStore, combineReducers, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './src/reducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // used to dispatch() functions
      loggerMiddleware, // used for logging actions
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

AppRegistry.registerComponent(appName, () => App);
