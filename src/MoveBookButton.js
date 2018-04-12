import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MoveBookButton.css';
import { shelfs, emptyShelf } from './config';

class MoveBookButton extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onMoveBook: PropTypes.func.isRequired
  };

  render() {
    return (
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
              shelf.id === this.props.book.shelf ||
              (shelf.id === emptyShelf.id && !this.props.book.shelf)
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
                onClick={() => this.props.onMoveBook(this.props.book, shelf.id)}
                className="dropdown-item"
              >
                <span className={`fa ${shelf.faClass}`} /> {shelf.title}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MoveBookButton;
