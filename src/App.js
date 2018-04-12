import React, { Component } from 'react';
import ListBooks from './ListBooks';
import SearchPage from './SearchPage';
import BookDetailPage from './BookDetailPage';
import { Route } from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI';

class App extends Component {
  state = {
    books: [],
    searchedBooks: [],
    searchQuery: '',
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
  updateQuery = query => {
    this.setState(() => ({
      searchQuery: query
    }));
    this.searchBook(query);
  };

  searchBook = query => {
    if (query < 1) {
      this.setState(() => ({
        searchedBooks: []
      }));
      return;
    }
    BooksAPI.search(query).then(books => {
      if (books.error) {
        this.setState(() => ({
          searchedBooks: []
        }));
        return;
      }
      this.setState(() => ({
        searchedBooks: books
      }));
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
        <div className="container">
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
          <Route
            exact
            path="/add-books"
            render={() => (
              <SearchPage
                books={this.state.searchedBooks}
                loading={this.state.loading}
                query={this.state.searchQuery}
                onUpdateQuery={this.updateQuery}
                onMoveBook={this.moveBook}
              />
            )}
          />
          <Route
            exact
            path="/book/:bookId"
            render={props => (
              <BookDetailPage {...props} onMoveBook={this.moveBook} />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
