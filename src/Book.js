import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import { shelfs, emptyShelf } from './config';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onMoveBook: PropTypes.func.isRequired
  };
  bookImage() {
    const imageLinks = this.props.book.imageLinks;
    return imageLinks ? imageLinks.smallThumbnail : 'fallback.png';
  }
  render() {
    const { book, onMoveBook } = this.props;

    return (
      <div className="book">
        <div className="card">
          <div
            className="card-img-top"
            style={{
              backgroundImage: `url(${this.bookImage()})`
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
                {shelfs.concat(emptyShelf).map(shelf => {
                  if (
                    shelf.id === book.shelf ||
                    (shelf.id === emptyShelf.id && !book.shelf)
                  ) {
                    return (
                      <span key={shelf.id} className="dropdown-item active">
                        <span className={`fa ${shelf.faClass}`} /> {shelf.title}
                      </span>
                    );
                  }
                  return (
                    <a
                      key={shelf.id}
                      onClick={() => onMoveBook(shelf.id)}
                      className="dropdown-item"
                    >
                      <span className={`fa ${shelf.faClass}`} /> {shelf.title}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
