import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MoveBookButton from './MoveBookButton';
import './Book.css';
import { Link } from 'react-router-dom';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onMoveBook: PropTypes.func.isRequired
  };

  /**
   * Returns the image url of the book
   * @return {string}
   */
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
            <Link
              to={{
                pathname: `/book/${book.id}`,
                state: { book: book }
              }}
            >
              <h5 className="card-title">{book.title}</h5>
            </Link>
            <p className="card-text">{book.authors}</p>
          </div>

          <div className="card-body">
            <MoveBookButton book={book} onMoveBook={onMoveBook} />
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
