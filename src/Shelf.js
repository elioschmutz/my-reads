import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Shelf extends Component {
  static propTypes = {
    shelf: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    loading: PropTypes.string.isRequired,
    onMoveBook: PropTypes.func.isRequired
  };

  render() {
    const { shelf, books, loading, onMoveBook } = this.props;

    return (
      <div className="shelf">
        <div className="row my-3 border-bottom">
          <div className="col">
            <h2>
              <span className={`fa ${shelf.faClass}`} />
              {` ${shelf.title}`}
            </h2>
          </div>
        </div>
        <div className="row">
          {loading === 'loading' && <span>Loading...</span>}
          {loading === 'error' && (
            <span>Error while loading the books in this shelf</span>
          )}
          {books.length <= 0 &&
            loading === 'done' && <span>No books in this shelf</span>}
          {this.props.books.map(book => (
            <div className="col-sm-4 col-md-3" key={book.id}>
              <Book
                book={book}
                onMoveBook={newShelf => onMoveBook(book, newShelf)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Shelf;
