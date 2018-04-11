import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Book.css';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onMoveBook: PropTypes.func.isRequired
  };

  render() {
    const { book, onMoveBook } = this.props;

    return (
      <div className="book">
        <div className="card border-light">
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
                <a
                  onClick={() => onMoveBook('currentlyReading')}
                  className="dropdown-item active"
                >
                  <span className="fa fa-clock" /> Currently reading
                </a>
                <a
                  onClick={() => onMoveBook('wantToRead')}
                  className="dropdown-item"
                >
                  <span className="fa fa-bookmark" /> Want to read
                </a>
                <a onClick={() => onMoveBook('read')} className="dropdown-item">
                  <span className="fa fa-check" /> Read
                </a>
                <a onClick={() => onMoveBook('')} className="dropdown-item">
                  <span className="fa fa-times" /> None
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
