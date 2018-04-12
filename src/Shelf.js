import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import Spinner from './Spinner';

class Shelf extends Component {
  static propTypes = {
    shelf: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    loading: PropTypes.string.isRequired,
    onMoveBook: PropTypes.func.isRequired,
    emptyShelfText: PropTypes.string
  };

  static defaultProps = {
    emptyShelfText: 'No books in this shelf'
  };

  render() {
    const { shelf, books, loading, onMoveBook } = this.props;

    return (
      <div className="shelf">
        <div className="row my-3 border-bottom">
          <div className="col">
            <h2>
              <span className={`fa ${shelf.faClass}`} />
              {` ${shelf.title}`} {<Spinner loading={loading} />}
            </h2>
          </div>
        </div>

        <div className="row">
          {loading === 'error' && (
            <span>Error while loading the books in this shelf</span>
          )}
          {books.length <= 0 &&
            loading === 'done' && <span>{this.props.emptyShelfText}</span>}
          {this.props.books.map(book => (
            <div className="col-sm-4 col-md-3" key={book.id}>
              <Book book={book} onMoveBook={onMoveBook} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Shelf;
