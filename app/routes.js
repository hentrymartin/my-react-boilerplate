import React from 'react';
import App from './components/App';
import HomePage from './components/HomePage';
import {
  Route,
  DefaultRoute,
} from 'react-router';

export default (
    <Route name="top" handler={App} path="/">
      <DefaultRoute handler={HomePage} />
    </Route>
);


