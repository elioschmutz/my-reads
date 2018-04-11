import React, { Component } from 'react';
import Shelf from './Shelf';
import PropTypes from 'prop-types';

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    loading: PropTypes.string.isRequired,
    onMoveBook: PropTypes.func.isRequired
  };

  render() {
    const { books, loading, onMoveBook } = this.props;

    return (
      <div className="list-books">
        <nav className="main-navigation navbar navbar-expand-md navbar-dark bg-primary">
          <a className="navbar-brand" href="/">
            <h1>MyReads</h1>
          </a>
          <div className="collapse navbar-collapse" id="main-navigation" />
        </nav>
        <div className="container">
          <div className="row my-3">
            <div className="col">
              <button type="button" className="btn btn-secondary float-right">
                <span className="fa fa-plus">&nbsp;</span> Add book
              </button>
            </div>
          </div>
          <Shelf
            loading={loading}
            onMoveBook={onMoveBook}
            shelfTitleImageClass="fa-clock"
            shelfTitle="Currently reading"
            books={books.filter(book => book.shelf === 'currentlyReading')}
          />
          <Shelf
            loading={loading}
            onMoveBook={onMoveBook}
            shelfTitleImageClass="fa-bookmark"
            shelfTitle="Want to read"
            books={books.filter(book => book.shelf === 'wantToRead')}
          />
          <Shelf
            loading={loading}
            onMoveBook={onMoveBook}
            shelfTitleImageClass="fa-check"
            shelfTitle="Read"
            books={books.filter(book => book.shelf === 'read')}
          />
        </div>
      </div>
    );
  }
}

export default ListBooks;
