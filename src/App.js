import React, { Component } from 'react';
import ListBooks from './ListBooks';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ListBooks} />
      </div>
    );
  }
}

export default App;
