import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Shelf extends Component {
  static propTypes = {
    shelfTitleImageClass: PropTypes.string.isRequired,
    shelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  };

  render() {
    const { shelfTitleImageClass, shelfTitle, books, loading } = this.props;

    return (
      <div className="shelf">
        <div className="row my-3 border-bottom">
          <div className="col">
            <h2>
              <span className={`fa ${shelfTitleImageClass}`} />
              {` ${shelfTitle}`}
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
              <Book book={book} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Shelf;
