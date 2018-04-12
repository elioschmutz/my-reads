import React, { Component } from 'react';
import Shelf from './Shelf';
import PropTypes from 'prop-types';
import { shelfs } from './config';
import { Link } from 'react-router-dom';
import NavigationContainer from './NavigationContainer';

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
        <NavigationContainer>
          <Link className="btn btn-secondary float-right" to="/add-books">
            <span className="fa fa-plus">&nbsp;</span> Add book
          </Link>
        </NavigationContainer>

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
    );
  }
}

export default ListBooks;
