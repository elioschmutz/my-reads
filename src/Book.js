import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import { shelfs, emptyShelf } from './config';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onMoveBook: PropTypes.func.isRequired
  };
  getShelfs() {
    return shelfs
      .concat(emptyShelf)
      .filter(shelf => shelf.id !== this.props.book.shelf);
  }
  render() {
    const { book, onMoveBook } = this.props;
    return (
      <div className="book">
        <div className="card">
          <div
            className="card-img-top"
            style={{
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <p className="card-text">{book.authors}</p>
          </div>
          <div className="card-body">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                Move to...
              </button>
              <div className="dropdown-menu">
                {this.getShelfs().map(shelf => (
                  <a
                    key={shelf.id}
                    onClick={() => onMoveBook(shelf.id)}
                    className="dropdown-item"
                  >
                    <span className={`fa ${shelf.faClass}`} /> {shelf.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
