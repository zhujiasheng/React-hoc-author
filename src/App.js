import React, { Component, Fragment } from 'react';
import './App.css';
import RootRouter from './router.js'


class App extends Component {
  render() {
    return (
      <Fragment>
        <RootRouter />
      </Fragment>
    );
  }
}

export default App;
