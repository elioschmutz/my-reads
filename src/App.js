import React, { Component } from 'react';
import ListBooksPage from './ListBooksPage';
import SearchPage from './SearchPage';
import BookDetailPage from './BookDetailPage';
import { Route } from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI';
import { loading } from './config';

class App extends Component {
  state = {
    books: [],
    searchedBooks: [],
    searchQuery: '',
    loading: loading.loading
  };

  componentDidMount() {
    this.getAllBooks();
  }

  /**
   * Fetches all selected books
   */
  getAllBooks() {
    BooksAPI.getAll().then(
      books => {
        this.setState({
          books: books,
          loading: loading.done
        });
      },
      () => {
        this.setState({ loading: loading.error });
      }
    );
  }

  /**
   * Moves a book to a new shelf.
   * @param  {object} book - A book object
   * @param  {string} shelf - The id of the new shelf
   */
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

  /**
   * Updates the search query.
   * @param  {string} query - Searchstring
   */
  updateQuery = query => {
    this.setState(() => ({
      searchQuery: query
    }));
    this.searchBook(query);
  };

  /**
   * Searches books by a querystring
   * @param  {string} query - Searchstring
   */
  searchBook = query => {
    this.setState({ loading: loading.loading });

    // Set no books if the query is less than 1 characters
    if (query < 1) {
      this.setState(() => ({
        searchedBooks: [],
        loading: loading.done
      }));
      return;
    }

    BooksAPI.search(query).then(books => {
      // Set no books if there was an error loading books
      if (books.error) {
        this.setState(() => ({
          searchedBooks: [],
          loading: loading.done
        }));
        return;
      }

      // Set the new books
      this.setState(() => ({
        searchedBooks: books,
        loading: loading.done
      }));
    });
  };

  /**
   * Fetches a book by it's ID
   * @param  {string} bookId - ID of a book
   */
  getBook = bookId => {
    this.setState({ loading: loading.loading });
    BooksAPI.get(bookId).then(book => {
      this.setState(() => {});
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
              <ListBooksPage
                books={this.state.books}
                loading={this.state.loading}
                onMoveBook={this.moveBook}
              />
            )}
          />

          <Route
            exact
            path="/search"
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
