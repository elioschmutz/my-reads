import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Book.css';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  };

  render() {
    const { book } = this.props;

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
        </div>
      </div>
    );
  }
}

export default Book;
