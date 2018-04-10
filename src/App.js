import React, { Component } from 'react';
import ListBooks from './ListBooks';
import { Route } from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI';

class App extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      });
    });
  }
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => <ListBooks books={this.state.books} />}
        />
      </div>
    );
  }
}

export default App;
