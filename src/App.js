import React, { Component } from 'react';
import ListBooks from './ListBooks';
import { Route } from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI';

class App extends Component {
  state = {
    books: [],
    loading: 'loading'
  };
  componentDidMount() {
    BooksAPI.getAll().then(
      books => {
        this.setState({
          books: books,
          loading: 'done'
        });
      },
      () => {
        this.setState({ loading: 'error' });
      }
    );
  }
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks books={this.state.books} loading={this.state.loading} />
          )}
        />
      </div>
    );
  }
}

export default App;
