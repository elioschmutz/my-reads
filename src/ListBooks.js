import React, { Component } from 'react';
import Shelf from './Shelf';
import PropTypes from 'prop-types';
import { shelfs } from './config';

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
        <div className="container">
          <div className="row my-3">
            <div className="col">
              <button type="button" className="btn btn-secondary float-right">
                <span className="fa fa-plus">&nbsp;</span> Add book
              </button>
            </div>
          </div>
          {shelfs.map(shelf => (
            <Shelf
              key={shelf.id}
              shelf={shelf}
              loading={loading}
              onMoveBook={onMoveBook}
              books={books.filter(book => book.shelf === shelf.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ListBooks;
