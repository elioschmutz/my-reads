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
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    this.setState(prevState => {
      const books = prevState.books.filter(b => b.id !== book.id);
      book.shelf = shelf;
      return {
        books: books.concat(book)
      };
    });
  };
  render() {
    return (
      <div>
        <nav className="main-navigation navbar navbar-expand-md navbar-dark bg-primary">
          <a className="navbar-brand" href="/">
            <h1>MyReads</h1>
          </a>
          <div className="collapse navbar-collapse" id="main-navigation" />
        </nav>
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              books={this.state.books}
              loading={this.state.loading}
              onMoveBook={this.moveBook}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
